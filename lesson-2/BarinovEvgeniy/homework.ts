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







