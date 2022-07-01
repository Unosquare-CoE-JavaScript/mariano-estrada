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

