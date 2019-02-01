// 1) Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//    Возвращает true, если все аргументы, кроме первого входят в первый.
//    Первым всегда должен быть массив.
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(arr);
    console.log(args);
    return true;
}
isInArray([1, 2, 3], 4, 5, 6);
// npx tsc lesson-2/PavlenkoVitaly/homework.ts
// node lesson-2/PavlenkoVitaly/homework.js
