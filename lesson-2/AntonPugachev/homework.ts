type stringOrNumber = string | number;
type customType = string | number | boolean ;

/***
 1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 */
function isInArray(arr: customType[], ...args: customType[]): boolean {
    return args.every((item: customType) => {
        return arr.includes(item);
    });
}

/**
 2) Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 * */

function isString(val: stringOrNumber): val is string {
    return typeof val === 'string';
}

function summator(..._args: stringOrNumber[]): number|null {
    try {
        return _args.reduce<number>((sum: number, item: stringOrNumber) => {
            if (isNaN(Number(item)) || item === null) {
                throw new Error('не верный тип');
            }
            return sum + (isString(item) ? Number(item) : item);
        }, 0);
    } catch (e) {
        console.log(e.message);
        return null;
    }
}

/**
 3)Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.
 */
function getUnique(...args: stringOrNumber[]): stringOrNumber[] {
    const result: stringOrNumber[] = [];
    new Set(args).forEach((value1: stringOrNumber) => {
        result.push(value1);
    });
    return result;
}

/**
 4)Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */
function toMatrix(data: customType[], rowSize: number): customType[][] {
    const arr: customType[][] = [];
    let partArr: customType[] = [];
    data.forEach((item: customType, index: number) => {
        ((index + 1) % rowSize === 0) ?
            (partArr.push(item), arr.push(partArr), partArr = []) :
            partArr.push(item);
    });
    return arr;
}

// tslint:disable-next-line
// function logMethod1(_target: Object, _methodName: string, descriptor: PropertyDescriptor): any {
//     const originalDescriptorValue: Function = descriptor.value;
//     return { ...descriptor,
// // tslint:disable-next-line
//         value: (...args: any[]) => {
//             const strArgs: string = args
//             // tslint:disable-next-line
//                 .map((arg: any) => JSON.stringify(arg))
//                 .join();
// // tslint:disable-next-line
//             const result: any = originalDescriptorValue(...args);
//             const r: string = JSON.stringify(result);
// // tslint:disable-next-line
//             console.log(`Call: ${_methodName} (${strArgs}) => ${r}`);
//             return result;
//         }
//     };
// }

// —-------------------------------------------------------------------------------------------—
export class Homework {
    // @logMethod1
    // public isInArray(arr: customType[], ...args: customType[]): boolean {
    //     return args.every((item: customType) => {
    //         return arr.includes(item);
    //     });
    // }
    public _isInArray: Function = isInArray;
    public _summator: Function = summator;
    public _getUnique: Function = getUnique;
    public _toMatrix: Function = toMatrix;
}

const newHomework: Homework = new Homework();

console.log('задание 1');
console.log(newHomework._isInArray([null, 2, 3, ''], 1));
console.log('задание 2');
console.log(newHomework._summator('1', 'asd', 2, 3));
console.log('задание 3');
console.log(newHomework._getUnique(2, '3', 1, 1, 1, 7, 1, 1, 2, 2, 2, 2));
console.log('задание 4');
console.log(newHomework._toMatrix([1, 2, true, 4, 5, 6, 7], 4));
