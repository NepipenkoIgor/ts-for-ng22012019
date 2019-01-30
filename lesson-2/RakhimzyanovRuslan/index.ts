
// Используйте то что увидели на занятии
// Никаких any , обобщите аргументы на примитивы
type StringOrNumb = string | number;
type Primitive = StringOrNumb | boolean;


// 1)
// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.

function isInArray(array: Primitive[], ...args: Primitive[]): boolean {
    return args.every((arg: Primitive) => array.includes(arg));
}

// console.log(isInArray([1, 2, 3, false, 4, '5', true], 1, 1, 2, 4, false, '5'));


// 2)
//  Написать функцию summator(), которая суммирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function summator(...args: StringOrNumb[]): number {
    return args.reduce<number>((acc: number, arg: StringOrNumb) => acc + +arg, 0);
}

// console.log(summator(1, 2, '3', 4));


// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

function getUnique(array: Primitive[]): Primitive[] {
    return array.filter((value: Primitive, index: number, arr: Primitive[]) => arr.indexOf(value) === index);
}

// console.log(getUnique([1, 1, 333, 3, 33, 333, 'a', 1, 'a', 'c', false, true, false]));


// 4)
//  Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
//  возвращает новый массив. Число показывает количество элементов в подмассивах,
//  элементы подмассивов беруться из массива data.
//  Оригинальный массив не должен быть изменен.

function toMatrix(data: Primitive[], rowSize: number): Primitive[][] {
    const result: Primitive[][] = [];
    data.forEach((value: Primitive, index: number) => {
        if (index % rowSize === 0) { // создаем новый подмассив
            result.push([value]);
        } else { // добавляем в существующий подмассив
            result[result.length - 1].push(value);
        }
    });
    return result;
}

// console.log(toMatrix([1, 2, 3, 4, 5, true, '5', 7], 3));
// get test