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
Once the compiler gets to the code generation  
