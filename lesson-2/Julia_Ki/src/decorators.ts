class MathLib {
    @logMethod
    public areaOfCircle(r: number): number {
        return Math.PI * r ** 2;
    }
}

// @ts-ignore
function logMethod (
        _target: Object,
        methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor {
    // захватываем оригинал-й метод
    const originalDescriptorValue: Function  = descriptor.value;
    return {
        ...descriptor,
        // value - это вся ф-я descriptor'а
        value: (...args: any[]) => {
            // аргументы внешней ф-ии и их переработка
            const strArgs: string = args
                .map((arg: any) => {
                    return JSON.stringify(arg);
                })
                .join('');

            // вызов оригинального метода ф-ии с аргу-м, переданный во внешнюю ф-ю
            const result: any = originalDescriptorValue(...args);
            // переработка результата работы ф-ии
            // const r = JSON.stringify(result);
            console.log(`Call: ${methodName} (${strArgs}) => ${result}`);
            return result;
        }
    };
}

const lib: MathLib = new MathLib();
// tslint:disable-next-line
console.log(lib.areaOfCircle(10));

// tslint:disable-next-line
console.log(lib.areaOfCircle(2));