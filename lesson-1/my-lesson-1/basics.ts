// interface Account {
//     firstName: string,
//     age: number,
// }

const account = {
    firsName: 'user',
    age: 55,
};

const user: typeof account = {
    firsName: 'lala',
    age: 22
};

let age: number = 1;
let age2: number;

let age3 = 88;


// !!! type *** - Алиас или кастомный тип
type Acc = {
    readonly firstName: string,
    age?: number
}

let accounts: Acc[] = [{
    firstName: 'Igor'
}, {
    firstName: 'Alan'
}];

let nums: ReadonlyArray<number> = [1,2,4,5];
let b: Partial;

// затипизировать callback
function makeArray( callback: (a: number) => void ): void {
    callback(1);
}

// показать, что callback - это конструктор
// Но используется редко
function makeArray2( callback: new(a: number) => void ): void {
    new callback(1);
}

// Интерфейсы и типы. У интерфейсов есть особ-ти, которых нет у type. Надо задавать  вопрос,
// нужен ли и вправду интерфейс


// Generic - обобщение. Это ПАРАМЕТРЫ ДЛЯ ТИПОВ
// Generic может быть для Type, Interface, Class, function

//задача: сделать так, чтобы два этих повторения не было
interface IUserString {
    _id: string,
    firstName: string,
}
interface IUserNumber {
    _id: number,
    firstName: string,
}

//вот так
interface IUser<ID, G> {
    _id: ID,
    firstName: string,
    info: G[], // массив типа G
}

let user2: IUser<number, {bonus: number}> = {
    firstName: 'Igor',
    _id: 123,
    info: [ // тип G в данном случае - объект. Значит тут это массив объектов
        {bonus: 32}
    ],
};