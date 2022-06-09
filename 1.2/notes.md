# Scope and Closure

## Whats the scope?
 One of the main topics about this book is asking ourselves which variables are accessible to which statement in Js

## Compiled vs Interpreted
- JS is parsed/compiled in a separate phase before execution begins
- Code compilation is a set of steps that process code that turn it into a list of instructions that the computer can understand

### Interpretation
Interpretation is similar to  compilation, however unlike compilation it is not compiled everything at once, code interpretation transforms the code line by line
- Modern Js engines employ different variations of both compilation and iterpretation
- Js is considered as a compiled language

### Compilation
*Scope is determined during compilation
According to classic compiler theory a compiler has three main steps
- Tokenizing/Lexing: Consists of breaking up a string of characters into small chunks called tokens for example:

- - var a = 2 it would be broken as var, a, =, 2

- Parsing: Taking a stream of tokens and turning it into nested elementes which represent the gramatical structure of the program, that structure is called Abstract Syntax Tree (AST). For example:

- - var a = 2 would start with a top level with a child node called Identifier (whose value is a) and another child element called Assigment Expression which has a child element called Numericliteral (whose value is 2)

- Code Generation: It takes the AST amd turns it into executable code

### Two phases

When Js is processed it occurs in two phases: Parsing/compiling and then executes
JS does not require compilation explicitly. There are three main behaviours to observe this

### Syntax errors from the start
Lets consider the next code

var greeting = 'Hello'
console.log(greeting)
greeting = .'hi'
//Syntax error

The program throws a syntax error because opf the unexpected token before the hi string
Js knows about the syntax error because it parses the entire program before it is executed 

### Early Errors
Lets consider: 

console.log('Howdy')
saySomething('Hello','Hi')
//Uncaught syntax error Duplicate Parameter not allowed

function saySomething(greeting, greeting){
    'use strict'
    console.log(greeting)
}

Howdy would not be printed despite being well formed
The error is thrown before the code is executed, this is because of the strict mode
Strict mode forbids to have duplicate parameter names

But how does the Js engine know the greeting parameter was duplicated?
This is because the code is fully parsed before it gets compiled

### Hoisting
lets consider:

function saySomething(){
    var greeting = 'hello'
    {
        greeting = 'Howdy'
        Let greeting = 'Hi'
        console.log(greeting)
    }
}

saySomething() //Cannot access greeting before inicialization

The reference error here in the line with the statement Howdy
what happens here is that the greeting variable belongs to the next declaration rather than the previous statement

- The reference error comes from greeting = 'Howdy' accessing the variable too early

## Compiler speak
Lets examine the next code

var students = [
    {id: 14, name: 'kyle'},
    {id: 73, name: 'suzy'},
    {id: 112, name: 'frank'},
    {id: 6, name: 'sarah'},
]

function getStudentName(studentID){
    for(let student of students){
        if(student.id == studentID){
            return student.name
        }
    }
}

let nextStudent = getStudentName(73)
console.log(nextStudent) // Suzy

- all occurrences of variables are either targets or source of a value

### Targets
What makes  a target?
- this happens when a variable gets a value assignation

### Sources
What makes a source
- this happens at the variable reference part

## Lexical scope
The term refers to the first stage of compilation
The compilation creates a map of all the lexical scopes, while scopes are identified during compilation they are not created until runtime

### Marbles, buckets and bubbles

This metaphor consists on the buckets are scopes(functions and blocks), each marble inside is determined by its bucket
Scope bubbles are created during compilation based on where the scopes are located, esentially it asks which color scope am I currently in?

### A conversation among friends
Here are some parts of the Js engine

- Engine: responsible for start to finish compilation and execution of the Js program
- Compiler: handles all of the parsing and code generation work
- Scope Manager: collects a list of all of the devlared variables/identifiers

for example looking at the code we wrote on the prior segments:
First of all the compiler will break the code into tokens performing the lexing and then parse it into a tree
Once the compiler gets to the code generation this are the steps that it will follow:

-  The compiler will look if there are all the variables needed on that particular scope, if so compiler would ignore this declaration and move on. Otherwise the compiler will produce code that asks the scope manager to create a new variable with the required name in that scope bucket

- The compiler produces code for the Engine to later execute, then the code Engine will look for variables who are accessible in the current scope bucket once it finds it, it gets the corresponding reference.

#### if we would look this as a conversation we can see that the Compiler takes this steps:
First it asks the Scope Manager if an identifier declaration has been found
- If not Scope manager creates the variable in that scope
- If the answer is yes it is effectively skipped since there is nothing else for the Scope manager to do

Compiler also signals when it runs across functions (or block scopes) so that a new scope bucket and scope manager can be instantiated

### Nested scopes
One of the keyspects of lexical scope is that any time an identifier cannot be found in the current scope the outer scope is consulted 
This process is repeated until an answer is found or there are no more scopes left

### Lookup Failures
When there are no more scopes available (outer ones) then an error condition exists however depending if its on strict mode or not and if the variable is a target or a source the error is handled differently
- If the variable is a source it is considered undeclared (not declared)
Not declared is different from undefined
- Not declared means that there is no matching formal declaration available
- Undefined means there is a variable but it has no value at the moment
However there are different kinds of undefined
var studentName
typeof studentName //undefined
typeof doesntExist //undefined
### Global what?
- If the variable is a target and strict mode is not in effect the Scope Manager will create  an accidental global variable
This behaviour creates bugs and shows why strict mode is important
- In strict mode the Global Scope Manager would have thrown a Reference Error

## The scope chain
### Function name scope
Just as a reminder a function declaration looks like this:
function hola(){
    ...
}

as discussed earlier the function declaration will create an identifier in the enclosing scope
Lets review the next function

let askQuestion = function(){
    ...
}

that function will have a similar behaviour than the first one, however the function itself will not hoist

One mayor difference between function declarations and function expressions is what happens to the name identifier
for example lets consider the next function:

var askQuestion = function ofTheTeacher(){
    ...
}

askQuestion ends in the outer scope however the ofTheTeacher identifier is defined as read only

### Arrow functions
An arrow function is an aditional function expression syntax added in ES6

let askQuestion = () =>{
    ...
}

- arrow functions dont require the keyword function
- they are lexically anonymous
- the assigment to askQuestions creates an inferred name of askQuestion however this is not the same as being not anonymous
askQuestion.name  // askQuestion
- thet have the same lexical scope as normal functions

## Around the global scope
- is the scope that covers all of the program
- it is located in the outermost portion of the program

There are some interesting cases to take into account

 ### Browser Window                                                                                                                                 
This is considered the most 'pure' way to run a js file
for example in the next code:

var studentName = 'kyle'

function Hello(){
    console.log(`Hello ${window.studentName})
}

window.hello() // Hello kyle

Here the outer scope is the global scope and studentName is created as a global variable

### DOM globals
In browser based JS applications we can ecnounter this surprising behavior
- When a DOM element with an id attribute automaticaly creates a global variable that references it:
<!-- 
<ul id='my-todo-list'>
    <li id='first'>
        Write a book
    </li>
</ul>
-->
 and the Js could include:

first
 <!-- //  <li id='first'>

 window['my-todo-list'] 
// <ul id='my-todo-list'> -->

if the value name is a lexical name (like first) a lexical variable is created, if not the only way to access it is through the global object

### What is in a window name

Here is another oddity in browser based Js

var name = 42;
console.log(name, typeof name);
// 42, string

- window.name is predefined 'global' in a browser context

The surprising behavior of this code is that we defined 42 as a number but we received '42' as a string
this is because window.name is a predefined getter/setter in the window object which inists on the value being a string.

### Web Workers
They are a platform extension on top of browser js behavior which allows JS to run in a completely separate thread
- Since they are on a separate thread they are restricted in their comunications with the main application thread, for example they do not have access to the DOM
- Since they are treated as a separate program they dont share the same global scope as the main Js program

However we can expect similar scope behavior in the global scope

In a Web Worker the global objecxt reference is made using self:

var studentName = 'Kyle'
let studentId = 42

function hello(){
    console.log(`Hello, ${self.studentName})

}

self.hello // Hello Kyle
self. studentId // undefined

var and function declarations create mirrored properties on the global object
let declarations cant do that

### Developer Tools Console
This tool enviroments prioritize developer convenience
They are not suitable enviroments to determine behaviors on Js program context

### Es Modules
