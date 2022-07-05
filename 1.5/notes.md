# React

## What is React?

React is a Javascript library for building interfaces
- it is client side
- is all bout building modern reactive applications

In javascript you have to add and describe every single step, it has an imperative approach
In react code is very reusable and easy to understand
React has a declarative, component focused approach

React has a smoother experience, it only request a single html page

## Js refresher

### let and const

- different ways of creating variables introduced in ES6
- let has block scope
- const should be used with constant values

### Arrow functions

- newer syntax for creating variables

let arrow = ()=>{
    ...
}

### Exports and imports

Since javascript code is modular it is important to be able to import and export content to/from another file

default export:
import person from './person'

named export:
import {person} from './person'

### Classes

A class can have properties and methods
A class is the blueprint for an object
it can be instanciated with the new keyword

class Person{
    constructor(){
        this.name = 'mariano'
    }

    printMyName(){
        console.log(this.name)
    }
}

const person = new Person()
person.printMyName() //mariano

- Properties are like variables attached to classes/objects
- Methods are like functions attached to classes/objects

### Spread and rest operator

its syntax is three dots: ...
- The spread operator is used to spread up array elements or properites
- The rest operator is used to merge a list of arguments into an array

### Destructuring

It allows us to easily extract array elements or object properties and store them in variables

const numbers = [1,2,3]
[num1] = numbers
console.log(num1) //1

## React Basics

React is all about components
why componentes?

- Dont repeat yourself
- Dont do too many things in the same space

### How is a component built

React allows you to create re usable and reactive components consisting of HTML, CSS and JS 
- Declarative approach => Declare the desired target states and let React figure out the actual DOM instruction
- A component in React is just a Javascript Function
- The main goal of a component is to split bigger chunks of code into smaller functions

### JSX

JSX stands for Javascript XML
- It transforms code ant turns it into code that can be read by the browser
JSX allows us to write HTML elements in JavaScript and place them in the DOM 

