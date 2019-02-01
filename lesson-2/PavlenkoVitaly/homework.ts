// 1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//    Возвращает true, если все аргументы, кроме первого входят в первый.
//    Первым всегда должен быть массив.

function isInArray(arr: number[], ...args: number[]): boolean {
    let isArray: boolean = true;

    args.forEach((item: number): void => {
        if (!arr.includes(item)) {
            isArray = false;
        }
    });

    return isArray;
}

// 2) Написать функцию summator(), которая суммирует переданые ей аргументы.
//    Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

type stringOrNumber = string | number;

function summator(...args: stringOrNumber[]): stringOrNumber {
    if (typeof args[0] === 'number') {
        let sum: number = 0;
        // TODO: не понимаю, как это исправить
        args.forEach((item: number) => {
            sum += item;
        });
        return sum;
    } else {
        return args.join('');
    }
}

// 3) Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//    и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//    Порядок элементов результирующего массива должен совпадать с порядком,
//    в котором они встречаются в оригинальной структуре.


function getUnique<T>(...args: T[]): T[] {
    const result: T[] = [];

    args.forEach((item: T) => {
        if (result.includes(item)) {
            return;
        }
        result.push(item);
    });

    return result;
}

// 4) Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//    возвращает новый массив. Число показывает количество элементов в подмассивах,
//    элементы подмассивов беруться из массива data.
//    Оригинальный массив не должен быть изменен.

function toMatrix<T>(data: T[], rowSize: number): T[][] {
    const newArr: T[][] = [];
    for (let i: number = 0; i < Math.ceil(data.length / rowSize); i++) {
        newArr[i] = data.slice((i * rowSize), (i * rowSize) + rowSize);
    }
    return newArr;
}