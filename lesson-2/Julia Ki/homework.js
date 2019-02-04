// Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
// Возвращает true, если все аргументы, кроме первого входят в первый.
// Первым всегда должен быть массив.
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result = [];
    args.map(function (arg) {
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
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return Array.from(args).reduce(function (acc, currVal) { return acc + currVal; });
}
console.log(summator(1, 2, 3, 4));
// Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
// и возвращает массив уникальных элементов. Аргумент не должен изменяться.
// Порядок элементов результирующего массива должен совпадать с порядком,
// в котором они встречаются в оригинальной структуре.
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var newArgs = [];
    args.map(function (arg) {
        if (!newArgs.includes(arg)) {
            newArgs.push(arg);
        }
    });
    return newArgs;
}
console.log(getUnique(2, 8, 2, 9, 6, 2, 5, 9, 4));
console.log(getUnique('a', 'b', 'a', 'c', 'b'));
function toMatrix(data, rowSize) {
    var copyOfData = data;
    var newArr = [];
    copyOfData.length = rowSize;
    for (var _i = 0, copyOfData_1 = copyOfData; _i < copyOfData_1.length; _i++) {
        var elem = copyOfData_1[_i];
        newArr.push(elem);
    }
    return newArr;
}
console.log(toMatrix([1, 2, 3, 4, 5, 6, 7], 3));
