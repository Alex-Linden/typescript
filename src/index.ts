let id: number = 5;
let company: string = "Company";
let isPublished: boolean = true;
let x: any = "any";

let ids: number[] = [1, 2, 3, 4];

console.log('ID: ', id);

// ids.push("g"); wont work

let arr: any[] = [1, 2, "hello", "world"] // can have any type

//Tuple
let person: [number, string, boolean] = [1, "brad", true]

//Tuple Array
let employee: [number, string][]

employee = [
  [1, "me"],
  [2, "you"],
  // ["them", 3] // won't work because in wrong order
]

//unions
let pID: string | number
pID = 22
pID = '22'

// Enum
enum Direction1{
  Up = 1,
  Down,
  Left,
  Right
}

console.log(Direction1.Up)
console.log(Direction1.Left)