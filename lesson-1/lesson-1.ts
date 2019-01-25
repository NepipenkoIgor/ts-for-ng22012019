// interface Account {
//     firstName: string;
//     age: number;
// }

// const user = Account;

// const account = {
//     firstName: 'Igor',
//     age: 33
// }

// const user1:  account = 1;

// class Account {
//     firstName: string = 'Igor';
//     age: number = 33;
// }

// let user =  Account;

// let age: number = 1;
// let age: number;
// age = 1;

// TODO why tslint not work 
// let a: number = 1;
// let s: string = 'str';
// let b: boolean = true;
// let sym: symbol = Symbol('sd');
// let n: null = null;
// let u: undefined = undefined;

// a = null;

// tslint:disable-next-line:no-any
// let dynamic: unknown;
// dynamic = 1;
// dynamic = 1;

// dynamic = {age: 1};
// dynamic.a = 1;
// tslint:disable-next-line:no-any
// let dynamic: unknown;
// dynamic = {};
// dynamic = function (_a: number): number {
//     return 1;
// };
// dynamic.a.b;
//  dynamic();
// function a(): void {

// }
// let v: void  = undefined;

// const account: {
//     readonly firstName: string,
//     age?: number
// } = {
//     firstName: 'Igor',
// };

// account.firstName = 'Vlad';


// let nums: number[] = [1, 2, 3];


// type Acc = {
//     readonly firstName: string,
//     age?: number
// };


// let accounts: Acc[] = [{
//     firstName: 'Igor',
// }, {
//     firstName: 'Igor',
// }];

// let nums: ReadonlyArray<number> = [1, 2];
// let b: Partial
// nums[4] = 5;
// nums.push(3);

// let cb1: { new (a: number): void };

// function makeArray(cb: new (a: number) => void ): void {
//     new cb(1);
// }


// function fn(v: number): void {

// }

// makeArray(fn);

// type Acc = {
//     readonly firstName: string,
//     age?: number
// };

// interface IOnInit {
//     firstName: string;
//     ngOnInit: () => void;
// }

// class MyComponent implements IOnInit {
//     public firstName: string = 'Igor';
//     public ngOnInit(): void { }
// }

// let a: IOnInit;

// type Info = {
//     bonuses: number[];
// };

// interface IName {
//     firstName: string;
// }
// interface IAge {
//     age: number;
// }

// interface IAcc extends IName, IAge {
//     bonuses: Info['bonuses'];
// }

// let acc: IAcc = {
//     bonuses: [1, 2, 3],
//     firstName: 'Igor',
//     age: 33
// };

// generic => Type, Interface, Class, function

// interface IUserString {
//     _id: number;
//     firstName: string;
// }
// interface IUserNumber {
//     _id: string;
//     firstName: string;
// }

// interface IUser<ID, G> {
//     _id: ID;
//     firstName: string;
//     info: G[]
// }

// let user1: IUser<number, { bonus: number }> = {
//     firstName: 'Igor',
//     _id: 123,
//     info: [
//         { bonus: 32 }
//     ]
// };

// let arr: Array<number>

interface IA {
    a: string;
    commonProperty: number;
}

interface IB {
    b: string;
    commonProperty: number;
}


// TODO union ???
let a: IA | IB = {
    commonProperty: 1
};

// let animation: 'linear' | 'easy-in' | 'off-leaner';
// animation = 'asdasda';

let sorting: -1 | 1 | 0;