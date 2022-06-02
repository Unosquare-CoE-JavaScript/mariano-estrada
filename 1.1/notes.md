# What is Javascript

## Notes about Js
Javascript has three main pillars: 
- scope/closures 
- prototypes/objects 
- types/coertcion

ECMA manages the specifications of the language

There are some functions like alert() that are not natively supported by JS however several enviroments that add APIs into the global scope of JS that make functions like alert() available

Paradigm refers to a mindset or approach to structuring code, typical paradigms include: Functional Programing and Procedural Object Oriented Programing

- Javascript is a multi paradigm language
- Javascript is backwards compatible but not fowards compatible

Transpiling is a term created by the comunity, it means using a tool to convert the source code from one form to another one, the mos common transpiler is Babel
If the fowards compatible problem is API related the most common solution is to provide a definition for the mising API method, this is called polyfill

Strict mode was introduced in ES5, its an optional mechanism that encourages better code
Use strict can be used on a global scope or a function scope

## JS Definition
JS is an implementation of the ECMAScript standard, which is guided by the TC39committee and hosted by ECMA.

It runs in browsers andother JS environments such as Node.js is a multi-paradigm language, meaning the syntax andcapabilities allow a developer to mix and match concepts from various major paradigms,suchas procedural, object-oriented(OO/classes), and functional (FP).

JS is a compiled language, meaning the tools process and verify a program before it executes.

### Notes about Js files
- Almost every web application consists of several different .js files
- Each file is its own separate program
- This is important because it simplifies error handling

### Values
- The most fundamental unit of information is a Value
- Values could be primitive or object
- Strings are ordered literals used to represent words or sentences
- Strings are surrounded between quotes or double quotes
- It is also possible to use backticks `` to create template strings

~~~
console.log("hola Mariano")
//hola Mariano

let nombre = "Mariano"
console.log(`hola ${nombre}`)
//hola Mariano
~~~

Other primitive literal values are booleans
Booleans can be true or false
Numbers are also considered primitive values
Other primitive values are null and undefined

### Arrays and Objects

- An array is an special type of object  compressed of an ordered and numerally indexed list of data
 ~~~
let array =[1,2,3,4,5]

let length = array.length
//5

array[0]
//1
~~~

- Objects are an unordered collection of  keyed values

~~~
let unicorn = {
    name: 'Mariano',
    lastName:'Estrada',
    specialities: ['Javascript', 'React']
}
~~~

~~~
console.log(`Hola mi nombre es ${unicorn.name}`)
//Hola mi nombre es Mariano
~~~
### Variable declaration
- Variables have to be declared in order to be used
~~~
var number = 1
~~~

The let keyword is similar to var however it has some key differences
let number = 1

- While the var keyword has a global scope, let has a block level scope 
- The third kind of variable declaration is the const keyword
- const does not allow to re declare its value

### Functions
A function could take the meaning of 'prodecure'
A function declaration takes the next form
 ~~~
function hola() {
    console.log('hola')
}

hola()
~~~

A function expression looks like this

~~~
let myFunction = function(){
    console.log('hola')
}

myFunction()
~~~

### Comparaisons

~~~
 ==
44 == '44' //true
 ===
44 === '44' //false
~~~

### How we organize data in Js
There are two mayor patterns in witch we organize data in Js: 
- Classes 
- Modules

#### Classes define how a data structure work
~~~
class Page{
    constructor(text){
        this.text= text
    }
}
~~~
The class mechanism allows us to organize data together with their own behavior

### Class inheritance
Consider the thext example
~~~
class Publication{
    constructor(title, author, pubDate){
        this.title = title
        this.author = author
        this.pubDate = pubDate
    }

    print(){
        console.log(`
        Title: ${this.title}
        Author: ${this.author}
        Date: ${this.pubDate}
        `)
    }
}
~~~
And then we take into cosideration book
~~~
class Book extends Publication{
    constructor(bookDetails){
        super(
            bookDetails.title,
            bookDetails.author,
            bookDetails.pubDate
        )
    }
}
~~~

The book class uses the extend keyword to include aditional behvior
The super call delegates to the parent class constructor and it creates more specific things

### Modules
The module pattern has a similar goal to the class pattern(group data a in behavior together into logical units) but their syntax is different

The key hallmarks of a classic module are an outer function which returns an instance of the module with one or more functions that can operate the internal data
Because a module is just a function and calling it produces an instance of the module
Es modules (ESM) introduced in ES6 are meant to serve the same purpose of classic modules
- ESMs are always file based; one file-one module
- ESMs dont interact with the API module explicitly
- ESMs are single instanced

### Iteration
The iterator pattern is the standarized way of consuming data one chunk at a time
ES6 intoduced several mechanisms to iterate like the for...of iterator
~~~
let iterate =[1,2,3,4,5]

for(let it of iterate){
    console.log(`El valor del iterador es ${it}`)
}
~~~

An iterable es a value that can be iterated over and over again
Another mechanism that is often used for consuming iterators is the ... (spread or gather) operator
The spread operator can be used in two posibilities: 

- array
~~~
var vals =[...it]
~~~
~~~
//function argument
let function1 = function(...it){

}
~~~
### Closures
Closure is when a fuction remembers and continues to use cariables from outside its scope even when the function is executed on a different scope
~~~
function counter(step = 1){
    var count = 0;
    return function increaseCount(){
        count = count + step
        return count
    }

}
~~~
Each instance of the inner function is closed over both the count and step variables
The inner function has access to the outer variables

### This keyword
The this keyword is best described as an execution context and it is exposed as the this keyword
One way to think about the execution context is that its a tangible object whose properties are available to a function it executes

### Prototypes
A prototype is a characteristic of an object
You could think of a prototype as a linkage between two objects 
That linkage happens behind courtains

- for example we create the next object
~~~
let dev = {
    specialities:'JS'
}
~~~
The dev object has a single property on it which is specialities
its default prototype connects it to the object.prototype witch has some methods linked to it
~~~
dev.toString()
~~~
- the toString method works because it is invoked as object.prototype.toString(
    
### Object Linkage
First lets create an object using the Object.create utility
~~~
let otherDev = Object.create(dev)

otherDev.specialities //JS
~~~
- The first argument toObject.create(..)specifies an ob-ject to link the newly created object to, and then returns thenewly created (and linked!) object.

## Remembrering the three pillars of Javascript

### Scope and closure
#### Scopes are like buckets and fuctions are like marbles you put into the buckets
The scope model is like the rules that help you determine which color marbles go in which color matching buckets
Scopes nest inside each inside another
Variables at that level of scope nesting or in higher/outer scopes can be accesed
Scopes from lower/inner levels are hidden or innacessible
Js is lexically scoped this means that the scope unit boundaries and how variables are organized is determined at the time the code is parsed
Js however has two main characteristics that lexically scoped languages lack
- The first one is hoisting, it happens when all variables declared anywhere in the scope get re declared at the top of the scope
- using const or let declarations can lead to a rare behaviour called Temporal Dead Zone where the variables are declared but not used
#### Closure is a natural result of lexical scope when the language has fuctions as first class values
When a function makes a reference to variables from an outer scope and that function is executed in other scopes it mantains access to the original scope

### Prototypes
JS is one of the few languages that allow you to create objects without first defininf its structure on a class
The prototype system has the ability to connect two objects dynamically through the this context

### Types and coercion
One way to avoid type mistakes is to use Typescript

### Values vs Reference
As stated earlier there are two types of values: primitive and objects
when you assing a value itself the value is copied
~~~
let myName = 'mariano'
let passName = myName

console.log(myName) //mariano
console.log(passName) // mariano
~~~
### Primitive values are always passed as value copies

- Values can be modified
- In Js object values are treated as references
~~~
let myAdress ={
    street: 'Calle1',
    city:'Toluca'
}

let newAdress = myAdress

myAdress.street = 'otra calle'

console.log(newAdress.street) //otra calle
~~~
- The assigned value to my adress is a copy of the reference value

### So many function forms
- The function expression bellow is considered an anonymous function because it has no name next to the function keyword
~~~
let nuevaFuncion = function (params) {
    return params
}
~~~
#### However since ES6 Js creates a name inference
~~~
nuevaFuncion.name //nuevaFuncion
~~~
#### This is not the same as the next example
~~~
let anotherFunction = function secondFunction(params) {
    return params
}

anotherFunction.name //secondFunction
~~~
- This second function is a named function expression

- generator function declaration 
~~~
function *two(){}
~~~
- async function declaration
~~~
async function three(){} 
~~~
- async generator function declaration
~~~
async function *four() {}
~~~
- named function export declaration (ES6 modules)
~~~
export function five() {}
~~~

### IIFE
~~~
(function(){})();
(function namedIIFE(){})();
// asynchronous IIFE
(async function(){})();
(async function namedAIIFE(){})();
// arrow function expressions
var f;
f=() =>42;
f=x => x*2;
f=(x) => x*2;
f=(x,y) => x*y;
f=x => ({ x:x*2});
f=x => {returnx*2; };
f=async x => {vary=await doSomething
Async(x);returny*2;};
someOperation( x => x*2);
~~~

- arrow function expressions are syntactically anonymous meaning the syntax doesnt provide a name identifier

- Functions can also be specified in class definitions and object literal definitions
~~~
class SomethingKindaGreat {
// class methods
coolMethod() {} // no commas!
boringMethod() {}
}

var EntirelyDifferent = {
// object methods
coolMethod() {}, // commas!
boringMethod() {}, 
// (anonymous) function expression property
oldSchool:function() {}
};
~~~

#### Coercive Conditional Comparison
- Lets consider
~~~
varx=1;if(x) {
// will run!
}
while(x) {
// will run, once!
x=false;
}
~~~
 - As we can see we cant get away from type coercions in Js

 ### Prototypal classes
 The prototypal class pattern is currently strongly discouraged  in favour for using the cass syntax introduced in ES6
 ~~~
 class Classroom {
     constructor() {
         }
         welcome() 
         {console.log("Welcome, students!");
        }
    }
    var mathClass=newClassroom();
    mathClass.welcome();// Welcome, students!
~~~
the class syntax covers the class oriented design pattern cleaner than the prototypal classes



∫