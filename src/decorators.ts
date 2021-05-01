export function sealed(p: string) {
    return function (target: Function): void {
        console.log(`Sealing the constructor ${p}`);
        Object.seal(target);
        Object.seal(target.prototype);
    }
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    const newConstructor: Function = function () {
        console.log('Creating new instance');
        console.log(target.name);

        this.age = 30;
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = newConstructor;

    newConstructor.prototype.printLibrarian = function () {
        console.log(`Librarian name: ${this.name}, Librarian age: ${this.age}`);
    }

    return newConstructor as TFunction;
}

export function writable(isWritable: boolean) {
    return function (_target: object, _method: string, descriptor: PropertyDescriptor) {
        descriptor.writable = isWritable;

        return descriptor;
    }
}

export function timeout(ms: number) {
    return function (target: object, methodName: string, descriptor: PropertyDescriptor) {
        // const originalMethod = target[methodName];
        const originalMethod = descriptor.value;
        console.log(originalMethod.name);

        descriptor.value = function (...args: any[]) {
            setTimeout(() => {
                originalMethod.apply(this, args);
            }, ms);
        };

        return descriptor;
    }
}

export function logParameter(target: object, methodName: string, index: number) {
    const key = `${methodName}_decor_params_indexes`;

    if (Array.isArray(target[key])) {
        target[key].push(index);
    } else {
        target[key] = [index];
    }
}

export function logMethod(target: object, methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const key = `${methodName}_decor_params_indexes`;
        const indexes = target[key];

        if (Array.isArray(indexes)) {
            args.forEach((arg, index) => {
                if (indexes.includes(index)) {
                    console.log(`Method: ${methodName}, ParamIndex: ${index}, ParamValue: ${arg}`)
                }
            })
        }

        return originalMethod.apply(this, args);
    };

    return descriptor;
}

function makeProperty<T>(
    prototype: any,
    propertyName: string,
    getTransformer: (value: any) => T,
    setTransformer: (value: any) => T
) {
    const values = new Map<any, T>();
    Object.defineProperty(prototype, propertyName, {
        set(firstValue: any) {
            Object.defineProperty(this, propertyName, {
                get() {
                    if (getTransformer) {
                        return getTransformer(values.get(this));
                    } else {
                        values.get(this);
                    }
                },
                set(value: any) {
                    if (setTransformer) {
                        values.set(this, setTransformer(value));
                    } else {
                        values.set(this, value);
                    }
                },
                enumerable: true
            });
            this[propertyName] = firstValue;
        },
        enumerable: true,
        configurable: true
    });
}

export function format(pref: string = 'Mr.Mrs') {

    return function (target: object, propertyName: string) {
        makeProperty(target, propertyName, value => `${pref} ${value}`, value => value);
    }
}

export function positiveInteger(target: object, methodName: string, descriptor: PropertyDescriptor) {
    const originalSet = descriptor.set;

    descriptor.set = function (value: number) {
        if (value < 1 || !Number.isInteger(value)) {
            throw new Error('Invalid value');
        }

        originalSet.call(this, value);
    }

    return descriptor;
}