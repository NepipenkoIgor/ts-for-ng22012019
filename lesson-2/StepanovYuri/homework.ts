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
    // tslint:disable-next-line:no-console
    // console.log('prev ' + prev + ' current ' + current);

    if (typeof current === 'string') {
      return parseInt(current) + prev;
    } else {
      return prev + current;
    }
}, 0);
}

// tslint:disable-next-line:no-console
// console.log(summator('11', 2, '3')); // 16