// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.

type sn = string | number;

function isInArray<sn>(arr: sn[], ...args: sn[]): boolean {
    const result = [];
    args.map((arg: sn) => {
        if (arr.includes(arg)) {
            result.push(arg);
        }
    });
    return result.length !== 0;
}

console.log(isInArray([1, 2, 3], 2));
console.log(isInArray(['cat', 'dog', 'bat'], 'cat'));


//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...args: number[]): number {
    return Array.from(args).reduce((acc: number, currVal: number) => acc + currVal);
}

console.log(summator(1,2,3,4));


// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.

function getUnique<sn>(...args: sn[]) {
    const newArgs: sn[] = [];
    args.map((arg: sn) => {
        if (!newArgs.includes(arg)) {
            newArgs.push(arg);
        }
    });
    return newArgs;
}

console.log(getUnique(2,8,2,9,6,2,5,9,4));
console.log(getUnique('a', 'b', 'a', 'c', 'b'));

// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// возвращает новый массив. Число показывает количество элементов в подмассивах,
// элементы подмассивов беруться из массива data.
// Оригинальный массив не должен быть изменен.

// ЕЩЕ НЕ РАБОТАЕТ КАК ОЖИДАЕТСЯ

type arr = number[];

function toMatrix(data: number[], rowSize: number): arr {
    const copyOfData = data;
    const newArr: number[] = [];

    copyOfData.length = rowSize;
    for (const elem of copyOfData) {
        newArr.push(elem);
    }
    return newArr;

}

console.log(toMatrix([1,2,3,4,5,6,7], 3));
