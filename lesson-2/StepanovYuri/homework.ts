// 1
type primitive = string | number | boolean;

function isInArray(arr: primitive[], ...rest: primitive[]): boolean {
  /* for (let i: number = 0; i < rest.length; i++) {
    // console.log(rest[i]);
    if (!(arr.indexOf(rest[i]) + 1)) { return false; }
  }
  return true; */

  const res1: boolean = rest.every((value: primitive) => arr.indexOf(value) >= 0);
  return res1;
}

// console.log(isInArray([1, '2', false], 1, 2)); // false
// console.log(isInArray([1, '2', false], 1, '2', false)); // true

// 2
type stringOrNumber = string | number;

function summator(...rest: stringOrNumber[]): number {
  return rest.reduce((prev: number, current: stringOrNumber) => {
    // console.log('prev ' + prev + ' current ' + current);
    if (typeof current === 'string') {
      return parseInt(current) + prev;
    } else {
      return prev + current;
    }
}, 0);
}

// console.log(summator('11', 2, '3')); // 16

// 3
function getUnique(...arr: stringOrNumber[]): stringOrNumber[] {
  return arr.filter((value: stringOrNumber, index: number, array: stringOrNumber[]) => {
    // tslint:disable-next-line:no-console
    // console.log('v ', value, 'i ', index, 'a ', array, 'exp', array.indexOf(value) === index);

    return array.indexOf(value) === index;
  });
  // return [...new Set(arr)];
}

// tslint:disable-next-line:no-console
// console.log(getUnique(1, 2, 3, 1, '2', '3'));

// 4
function toMatrix(data: stringOrNumber[], rowSize: number): stringOrNumber[][] {
  const result: stringOrNumber[][] = [];

  for (let i: number = 0; i < data.length; i += rowSize) {
    result.push(data.slice(i, i + rowSize));
  }
  return result;
}

// tslint:disable-next-line:no-console
toMatrix([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);