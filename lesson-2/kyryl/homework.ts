// 1
function isInArray(arr: (string | number | boolean | null | undefined)[], ...args) {
    return !args.filter((arg) => arr.indexOf(arg) === -1).length;
}
isInArray([1, 2, '3', null,4], 1, 2, '3', null,4);

// 2
function summator(...args: (string|number)[]){
    return args.filter(arg => Number(arg)).reduce((a, b) => a+b, 0);
}
console.log(summator(11, 2 ,1));

// 3
function getUnique(...args) {
    const result = [];
    args.forEach((arg) => {
        if(result.indexOf(arg) === -1) {
            result.push(arg)
        }
    });
    return result
}
getUnique(1,2,3,4, 1, 1, '1');

// 4
