// const mixArr: (string | number | boolean)[] = ['Hello', "Boy", 12, false];
const mixArr: Array<string | number | boolean> = ["Hello", "Boy", 12, false];



type GenericArray<T> = Array<T>;

const arrStr: GenericArray<string> = ["Peyas", "Ratry", "Jhinuk"];
const arrNum: GenericArray<number> = [1, 2, 3];
const arrBol: GenericArray<boolean> = [true, false, true];

// Generics in Tuple
type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<string, string> = ['10', '20'];
const coordinates2: Coordinates<number, number> = [10, 20];