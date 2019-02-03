// ** 1 */
type numOrStrOrBoolean = number | string | boolean;

function isInArray(arr: numOrStrOrBoolean[], ...args: numOrStrOrBoolean[]): boolean {
    // tslint:disable-next-line:no-console
    console.log('Массив: ' + arr + ' , элементы: ' + args);

    // tslint:disable-next-line:no-any
    let element: any;
    let typeel: string;
    let res: number;

    for (let i: number = 0; i < args.length; i++) {
        element = args[i];

        switch (typeof element) {
            case 'number':
                typeel = 'число';
                break;
            case 'string':
                typeel = 'строка';
                break;
            case 'boolean':
                typeel = 'boolean';
                break;
            default:
                typeel = 'спецтип';
        }

        if (arr.indexOf) { // если метод существует
            res = arr.indexOf(element);
            if (res === -1) {
                // tslint:disable-next-line:no-console
                console.log(element + ' - нет такого элемента в массиве...');
                return false;
            } else {
                // tslint:disable-next-line:no-console
                console.log('Элемент типа <' + typeel + '>, с индексом ' + i + ' и значением (' + element + ') найден');
            }
        }
    }

    return true;
}

let a: boolean = isInArray([1, true, false, 'angular'], true, 'angular');
// tslint:disable-next-line:no-console
console.log(a);
// tslint:disable-next-line:no-console
console.log('-------------------------');

let arra: boolean = isInArray([1, 2], 1, 2, 3);
// tslint:disable-next-line:no-console
console.log(arra);
// tslint:disable-next-line:no-console
console.log('-------------------------');

let arrastr: boolean = isInArray(['str', 'page', 'sun'], 'max', 'str', 'sun');
// tslint:disable-next-line:no-console
console.log(arrastr);
// tslint:disable-next-line:no-console
console.log('-------------------------');

let ar: boolean = isInArray([1, true, 'sds'], 1, 2, false );
// tslint:disable-next-line:no-console
console.log(ar);
// tslint:disable-next-line:no-console
console.log('-------------------------');

// ** 2 */
type numOrStr = number | string;

// tslint:disable-next-line:no-any
function summator(...args: any[]): any {
    let sum: number = 0;
    let str: string = '';
    if (typeof args[0] === 'number') {
        for (let i: number = 0; i < args.length; i++) {
            sum += args[i];
        }
        return sum;
    } else if (typeof args[0] === 'string') {
        for (let i: number = 0; i < args.length; i++) {
            str += args[i] + ' ';
        }
        return str.slice( 0, -1);
    }
}

let s: numOrStr = summator(1, 2, 3, 4, 5);
// tslint:disable-next-line:no-console
console.log(s);
let st: numOrStr = summator('Привет', 'мой', 'друг');
// tslint:disable-next-line:no-console
console.log(st);

// ** 3 */
function getUnique(...arr: any[]): any[] {
    let responce: any[];

    function uniqEl(el: any, i: number, m: any[]): boolean {
        return m.indexOf(el) === i;
    }
    responce = arr.filter(uniqEl);
    return responce;
}

let u: any[] = getUnique('set', 1, false, { toggle: true }, 34, {'delay': 15}, 'node', 1, 34, 5, 'js', 1, [1, 2]);
// tslint:disable-next-line:no-console
console.log(u);

// ** 4  ошибка Uncaught TypeError: Cannot set property '0' of undefined */ 
// type numOrStr = number | string;
function toMatrix(data: numOrStr[], rowSize: number = 1): numOrStr[] {
    // почему-то data - это объект...
    console.log(typeof data + ', data = ' + data);

    let startarray: numOrStr[] = data.slice();
    let size: number = rowSize;
    let countelement: number = Math.ceil(startarray.length / size);
    let subarray: numOrStr[];

    for (let i: number = 0; i < countelement; i++) {
        subarray[i] = startarray.slice((i * size), (i * size) + size);
    }

    return subarray;
}

let m: numOrStr[] = toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2);
// tslint:disable-next-line:no-console
console.log(m);