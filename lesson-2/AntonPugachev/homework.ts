/***
 1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 */

function isInArray<T>(arr: T[], ...args: T[]): boolean {
    let result: boolean = true;
    args.forEach((item: T) => {
        if (arr.indexOf(item) === -1 && result) {
            result = false;
        }
    });
    return result;
}

console.warn(isInArray([1, 2, 3], 1, 2, 3));

/**
 2) Написать функцию summator(), которая суммирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 * */
type stringOrNumber = string | number;

function isString(val: stringOrNumber): val is string {
    return typeof val === 'string';
}

function summator(...args: (stringOrNumber)[]): number {
    let result: number = 0;
    args.forEach((item: stringOrNumber) => {
        result += isString(item) ? Number(item) : item;
    });
    return result;
}

console.warn(summator('1', 2, '3'));

/**
 3)Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.
 */

function getUnique(...args: stringOrNumber[]): stringOrNumber[] {
    const result: stringOrNumber[] = [];
    // const myArray: stringOrNumber[] = [...args];
    args.forEach((item: stringOrNumber) => {
        if (result.indexOf(item) === -1) {
            result.push(item);
        }
    });
    return result;
}

console.warn(getUnique('1', 2, '3', 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2));

/**
 4)Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.
 */
function toMatrix<T>(data: T[][], rowSize: number): T[][] {
    const result: T[][] = [];
    data.forEach((item: T[]) => {
        result.push(item.splice(0, rowSize));
    });
    return result;
}

console.warn(toMatrix([[1, 2, 3, 4, 5, 6], [1, '2', 3, 4], [9, 8, 7]], 3));


/**5)* https://learn.javascript.ru/task/debounce*/

/**    6)* https://learn.javascript.ru/task/throttle*/