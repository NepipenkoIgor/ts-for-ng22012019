/**
 1)
 Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 **/

type stringOrNumber = string | number;

function isInArray(arr: stringOrNumber[], ...targets: stringOrNumber[]): boolean {
    return targets.every((item: stringOrNumber) => arr.includes(item));
}

/**
 2)
 Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 **/

function summator(...args: stringOrNumber[]): number {
    return args.reduce(
        (res: number, value: stringOrNumber): number => {
            value = typeof (value) === 'string' ? parseFloat(value) : value;
            return res + value;
        }, 0
    );
}

/**
 * 3)
 Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.
 */

function getUnique(...args: stringOrNumber[]) : stringOrNumber[] {
    return args.filter((item, i, args) =>  {
        return i === args.indexOf(item)
    });
}


/**
 * 4)
 Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */

function toMatrix(data: stringOrNumber[], rowSize: number): stringOrNumber[][] {
    let matrix : stringOrNumber[][] = [];

    data.forEach((_value, index) => {
        if (index % rowSize !== 0) return;
        matrix.push(data.slice(index, index + rowSize));
    });

    return matrix;
}


/**
 * 5)* https://learn.javascript.ru/task/debounce
 */


class MathLib {

    // @debounce(1000)
    @throttle(2000)
    public areaOfCircle(r: number) {
        console.log(Math.PI * r ** 2);
    }

}

function debounce(ms: number) {
    return (
        _target: Object,
        _methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor => {
        const originalDescriptorValue: Function = descriptor.value;

        let timer :any = null;

        function decorated(...args: any[])  {
            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(() => {
                timer = null;
                originalDescriptorValue.apply(_target, args);
            }, ms);
        }

        return {
            ...descriptor,
            value: decorated
        };
    }
}


/**
 * 6)* https://learn.javascript.ru/task/throttle
 */

function throttle(ms: number) {
    return (
        _target: Object,
        _methodName: string,
        descriptor: PropertyDescriptor
    ): PropertyDescriptor => {
        const originalDescriptorValue: Function = descriptor.value;

        let isWaiting: boolean = false;
        let lastArgs: any[];

        function decorated(...args: any[]) {
            if (isWaiting) {
                lastArgs = args;
                return;
            }

            originalDescriptorValue.apply(_target, args);
            isWaiting = true;

            setTimeout(() => {
                isWaiting = false;
                if (lastArgs.length) {
                    decorated.apply(_target, lastArgs);
                    lastArgs = [];
                }
            }, ms);
        }

        return {
            ...descriptor,
            value: decorated
        }

    }
}


/**
 * checking
 */
var math = new MathLib();

var i = 1;

var interval = setInterval(() => {
    math.areaOfCircle(i);
    i++;
}, 100);

setTimeout(() => clearInterval(interval), 10000);