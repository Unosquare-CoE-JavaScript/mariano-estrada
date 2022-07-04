# Asynchronous Javascript Deep Dive

## Introduction to Asynchronous Coding

Synchronous code is what we write by default in Js, it is easy to follow
- One piece of code executes and must finish before the next piece of code starts
- it is very easy to follow

Synchronous code must run in order and blocks anything else from running
for example

const test = function(){
    console.log('start of the code)
    alert('notice me')
    console.log('end of code')
}

const test2 = function(){
    console.log('Now I get attention')
}

test()
test2()

this code runs in a synchronous way because the code executes one line at a time

One of the main goals of asynchronous code is to react to what the user does without waiting for it allowing for other partos of the code execute and run
- asynchronous makes code much performant

const test = function(){
    setTimeout(function(){
        console.log('start of the code)
        alert('notice me')
        console.log('end of code')
    }, 10000)

}

const test2 = function(){
    console.log('Now I get attention')
}

test()
test2()

setTimeout allows us to run code while its waiting for the timeout to end effectively making the first test function asynchronous

## Advantages and disadvantages

Syncrhonous code
Advantages 
- Its easy to understand

Disadvantages
- May create blocking code
- Less performant

Asynchronous code
Advantages
- Very performant
- Eliminates code blocking

Disadvantages 
- Can be difficult to understand

## Event Loop
Event loop makes sure that all of the code is handled
- js is single threaded but the event loop allows it to run code aside
- The evnet loop checks for the time to run each chunk of code

The event loop continuously checks for queued messages and thereby makes it possible to do asynchronous coding

It consists on the following parts
- The call stack is responsible for keeping track of all the operations in line to be executed
- The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution
- Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation

The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.

## Callbacks
Traditonally it was the only way of creating asynchronous code
A callback is a function that is called after something else happens
this is achieved by passing a function inside of another function
this happens because higher order functions exist

for example:

let logCall = function(){
    console.log('this function was called back')
}

setTimeout(logCall,3000)

logCall is a callback because it happens after something else happens (setTimeout)

### Problems with callbacks

- Callback hell
Nested callbacks, make it difficult to understand the code
- Inversion of control
when you turn control of your code to something else

let item1 = document.getElementById("b1");

if (item1) {
    item1.addEventListener("click", function(e) {
        let a = 0,
            b = 10;

        setTimeout(function() {
            a++;
            setTimeout(function() {
                a++;
                console.log("1 Attempt: " + a);
            }, 0);
        }, 0);

        setTimeout(function() {
            console.log("2 Attempt: " + a);
        }, 0);
        a = b;
    });
}

The problem with this code is that the ammount of calbacks make it difficult to understand and reason

## Promises
Promises provide an asynchronous pattern that is easy to use and understand
- Many apis use promises

A promise is a javascript object with properties and methods
those methods are used to make use of the properties inside the promise
A promise represents the eventual completion or failure of anasynchronous operation
A promise provides a resulting value

Promises are 'thenable' this means we can use the method .then() on them

let promise = async function()

promise.then()

asyncFunction()
.then(function(val) {
    console.log("Yeah!! " + val);
    return asyncFunction2();
})
.then(function(val) {
    console.log("Second promise: " + val);
});

### Fetch
Fetch is a simplear way to make http request for retreiving data
Fetch is a part of the window object, not a part of js 

- Jquery can be used to retrieve data in json form
- It is accessed using the dollar sign character

#### IIFES recap
 
 IIFE is an inmediately invoked function expression
 - it runs at the moment it is defined

 It should be used when you need a function with local scope and needs to be run immediately

 this is a function expression

 let product = function(){
     console.log(5 * 5)
 } 

 function()

 here the function is invoked when we type the function call at the end of the function

 If we wanted to invoke it immediately then we should write the function expression as an IIFE

 (function(){
     console.log(5 * 5)
 }) ()

 #### Module Pattern Recap
Modules allows us to create self contained code
Advantages:
- Modules avoid colliions (namespace)
- Reusability
- Mantainability

## Finally Method

.finally is a recent method in js, this method can be used in any promise chain, it can be resolved and rejected
- is a great feature for cleanup tasks

for example:

asynchronousFunction(){
    .then(msg => console.log(msg))
    .catch(err => console.log(error))
    .finally( () => console.log('Cleaning up'))
}

## Promise all and race methods

Both are methods inside the promise constructor
they are called in the next ways

Promise.all()

Promise.race()

the Promise.all() allows us to enter serverall promises inside of an array

Promise.all([firstName(), middleName(), lastName])
//['Mariano', 'Fernando', 'Estrada'] 

it returns after all of the promises were resolved

This method returns a promise witch will be fufilled once every promise inside of the array is resolved
This method is useful when you need information from various promises

Promise.race() is literally a race hence the term
only the first promise that is resolved gets returned

Promise.race([firstName(), middleName(), lastName])
//'Mariano'

## Promise.allSettled() Promise.any

The Promise.allSettled() method eturns a promise that resolves after all of the given promises have either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.

It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, or you'd always like to know the result of each promise.

The Promise.any() method takes an iterable of Promise objects. It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise.

## Async/Await

The async/await keywords appeared after promises in Js, using async/await requires understanding of promises
- Their main purpose is to simplify promises

Aync/Await enable us to write code as it was synchronous but it includes the asynchronous functionality
It makes the code more readable and easy to understand

- Async is used as a part of the function definition, it forces the function tu return a promise 
- Await can only be used inside an async function, it waits for a promise

## Gernerators

