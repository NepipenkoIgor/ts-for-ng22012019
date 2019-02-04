type stringOrNumber = string | number;
type primitive = stringOrNumber | boolean | null | undefined;

// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(array: primitive[], ...arg: primitive[]): boolean {
    let result: boolean = true;
    for (let i: number = 0; i < arg.length; i++) {
        if (array.indexOf(arg[i]) < 0) {
            result = false;
        }
    }

    return result;
}

// console.log(isInArray([1, 2, 'one'], 1, 'one'));

// 2)
// Написать функцию summator(), которая суммирует переданые ей аргументы.
// Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
function summator(...args: stringOrNumber[]): number {
    return args.reduce((previousValue: number, currentValue: stringOrNumber) => {
        // console.log('prev ' + prev + ' current ' + current);
        if (typeof currentValue === 'string') {
            return Number(currentValue) + previousValue;
        } else {
            return previousValue + currentValue;
        }
    }, 0);
}

// console.log(summator('10', 2, 12));

// 3)
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
function getUnique(array: primitive[]): primitive[] {
    return array.filter(((value: primitive, index: number): primitive => array.indexOf(value) === index));
}

// console.log(getUnique(1, 2, 3, 1, 2, 22, '2', '3', 12, '13', '45', 12));

// 4)
// Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
// возвращает новый массив. Число показывает количество элементов в подмассивах,
// элементы подмассивов беруться из массива data.
// Оригинальный массив не должен быть изменен.
function toMatrix(data: primitive[], rowSize: number): primitive[][] {
    const newArray: primitive[][] = [];
    for (let index: number = 0; index < data.length; index += rowSize) {
        newArray.push(data.slice(index, index + rowSize));
    }
    return newArray;
}

// console.log(toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 3));
export {isInArray, summator, toMatrix, getUnique};
