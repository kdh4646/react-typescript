/*
    Primitives: start with 'Upper case' is Object, 'Lower case' is type
    ex) Number: Object, number: type
*/
let age: number;

age = 12;

let userName: string;

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

//More complex types
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

//type alias: this will disappear after build
type Person = {
  name: string;
  age: number;
};

//Object
let person: Person;

person = {
  name: "Max",
  age: 32,
};

//Array of Objects
let people: {
  name: string;
  age: number;
}[];

//Type inference: occurs error if course uses number type
let course = "React - The Complete Guide";
//course = 1234;

//union type: assign multiple types
let unionType: string | number = "React - The Complete Guide";
unionType = 1234;

//Functions & Types
function add(a: number, b: number) {
  //return type inference
  return a + b;
}

//return type: void
function printOut(value: any) {
  console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

//due to generic, updatedArray is considered as number[] type
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

const stringArray = insertAtBeginning(["a", "b", "c"], "d");
