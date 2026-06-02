var oldWay: string = "avoid";       // ❌ no block scope

let canChange: number = 10;         // ✅ value will change
canChange = 20;

const fixed: string = "dona";       // ✅ value never changes
// fixed = "abc";                   // ❌ error

const isLoggedIn: boolean = true;

let emptyValue: null = null;

let notAssigned: undefined = undefined;



// .....................................................
// ARRAYS

const scores: number[] = [90, 85, 78];

scores.push(100);      // ✅ add item
scores[0] = 95;        // ✅ change value
// scores = [];        // ❌ const blocks reassign

// RARE case — only if you need to wipe + reassign whole array
let scores1: number[] = [90, 85, 78];
scores1 = [];           // ✅ only reason to use let


// .....................................................
// TUPLE
// fixed length + fixed types
const user: [string, number] = ["don", 25];

user[0] = "abc";       // ✅ value change allowed
user[1] = 26;          // ✅ value change allowed
// user[1] = "hello";  // ❌ wrong type
// user[2] = 100;      // ❌ wrong length
// user = ["abc", 30]; // ❌ const blocks reassign

// RARE — only if need to reassign whole tuple
let user1: [string, number] = ["don", 25];
user1 = ["abc", 30];    // ✅ only reason to use let


// .....................................................
// TYPE INFERENCE
// TS guesses automatically
const username3 = "dona";       // infers string
const age3 = 25;                // infers number

// explicit always better ✅
const username: string = "dona";
const age: number = 25;



// .....................................................
// UNION TYPES
let id: string | number;
id = "ABC123";    // ✅
id = 123;         // ✅
//id = true;        // ❌ error


// .....................................................
// Type Alias - Custom type you create
// without alias — repetitive
// let userId: string | number
// let orderId: string | number
// let productId: string | number

// with alias — clean
type ID = string | number

let userId: ID;
let orderId: ID;
let productId: ID


//.....................................................
//CLASS
class User {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log("Hi I am " + this.name)
  }
}

const user13 = new User("Don", 25)
const user23 = new User("Sam", 30)

user13.greet()   // Hi I am Don
user23.greet()   // Hi I am Sam


//.....................................................
//INTERFACE
interface IUser8 {
  name: string        // must have name
  age: number         // must have age
  greet(): void       // must have greet method
}
//....
//Interface with class
interface IUser4 {
  name: string
  age: number
  greet(): void
}

class Employee implements IUser {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log("Hi I am " + this.name)
  }
}

//Interface with object
interface IUser {
  name: string
  age: number
}

const user: IUser = { name: "Dona", age: 25 }



//.....................................................
// Optional + Readonly
// readonly — value set once at creation, can never change after that
// ? — field is optional, can be skipped

interface Product {
  readonly id: number    // set once, locked forever
  name: string
  discount?: number      // optional — skip if not needed
}

const product: Product = {
  id: 1,
  name: "Sauce Labs Backpack"
  // discount skipped ✅
}

product.id = 2    // ❌ readonly — can't change after creation


//.....................................................
//Interface Extending 
interface Person {
  name: string
  age: number
}

interface Employee extends Person {
  role: string
}

const emp: Employee = {
  name: "Dona"     // from Person ✅
  age: 25          // from Person ✅
  role: "SDET"     // own field ✅
}





//.....................................................
//Functionns
// TypeScript — must type params + return type
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(5, 3));   // 8

// optional — may or may not pass
function greet(name: string, role?: string): string {
  return `Hello ${name} ${role ?? ""}`; //May or may not pass the value. If not passed → role is undefined. 
  // ?? "" handles that → shows empty string instead of undefined
}
console.log(greet("Don"));           // Hello Don
console.log(greet("Don", "SDET"));   // Hello Don SDET

// default — uses default if not passed
function greetDefault(name: string, role: string = "SDET"): string {
  return `Hello ${name}, role: ${role}`;
}
console.log(greetDefault("Don"));           // Hello Don, role: SDET
console.log(greetDefault("Don", "Lead"));   // Hello Don, role: Lead

//arrow fn
const greet5 = (
  name: string
): string => name;





//.....................................................
//Generics
function identity<T>(arg: T): T {
  return arg;
}
identity<string>("hello")   // ✅ string
identity<number>(42)        // ✅ number


function getFirst<T>(arr: T[]): T {
  return arr[0];
}
getFirst<string>(["a", "b", "c"])  // returns "a"


class Box<T> {
  value: T;
  constructor(val: T) { this.value = val; }
}
const box = new Box<number>(99);





//.....................................................
//Intersection Types
type User67 = { name: string; email: string };
type AdminExtra = { role: string; permissions: string[] };

type Admin = User67 & AdminExtra;

const admin: Admin = {
  name: "Dona",
  email: "dona@test.com",
  role: "superadmin",
  permissions: ["read", "write"]
};





//.....................................................
//any / unknown / never
// any — dangerous
let x: any = "hello";
x.toFixed(2);  // no error, but will crash at runtime

// unknown — safe
let y: unknown = "hello";
if (typeof y === "string") {
  console.log(y.toUpperCase());  // ✅ only works after check
}

// never
function crash(msg: string): never {
  throw new Error(msg);  // never returns
}







