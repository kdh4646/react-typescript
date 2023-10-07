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

//Object
let person: {
  name: string;
  age: number;
};

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
