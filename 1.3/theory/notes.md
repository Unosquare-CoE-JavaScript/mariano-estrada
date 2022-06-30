# Hardcore Functional Programming

Functional Programming is programing with functions
- A function is a set collection of pairs(inputs and outputs) 'one input one output'
- A function is: total, deterministic and has no side effects

## Mathematical, Pure Functions

### Total function
- A total function is a function where for every input there is a corresponding output
 
 const inc = i =>{
     if(i === 0){return 1}
     if(i === 1){return 2}
     if(i === 2){return 3}
}

This is not total because it does not have an output for every input


const inc = i =>{
    return 1 + 2
}

This is total: every input has an output

### Deterministic
- A function is deterministic when it always receive the same output for a given input

const timeSince = comment =>{
    const now = new Date()
    const then = new Date( comment.createdAt )
    return getDifference(now, then)
}

This is not deterministic: If i give it a new comment everytime it will give me a different output

const getDifference = (now, then)=>{
    const days = Math.abs(now.getDate() - then.getDate())
    const hours = Math.abs(now.getHours() - then.getHours())
    return(days, hours)
}

This is a deterministic function because if given two dates you will gate the same difference

### No side effects
No observable effects besides computing a value

const add = (x,y) =>{
    console.log(`adding ${x} ${y}`)
    return x + y
}

The console.log adds a change in an observable way 

const add = (x,y) =>{
    return (result: x + y, log: `adding ${x} ${y}`)
}

No side effects

### Pure Functions Checklist

- functions are total, have no side effects and deterministic

Advantages:
- Reliable
- Portable
- Reusable
- Testable
- Composable
- Properties/Contract

## Properties, Arguments and Currying

Properties

// associative
add(add(x, y), z) == add(x, add(y, z))
 
// commutative
add(x, y) == add(y, x)
 
// identity
add(x, 0) == x
 
// distributive
add(multiply(x, y), multiply(x, z)) == multiply(x, add(y,z))

- We should use currying when we want to remember an argument

## Composition
 Is an approach where the result of one function is passed on to the next function, which is passed to another until the final function is executed for the final result.

 for example :

 const compose = (f,g) => x => f(g(x))

 example 2:

 const compose = (f,g) => x => f(g(x))

 const toUpper = str => str.toUpperCase()

 const exclaim = str => str + !

 const shout = compose(exclaim, toUpper)

 console.log(shout('tears')) //TEARS!

 Using curry and composition together allows you to create an unitary function that takes one single argument instead of two arguments

 ## Creating identity functor
 - A functor is a container that holds an object that is mapped over

The identity functor has the next structure

const Box = x => ({
    map: f => Box(f(x)),
    fold: f =>f(x),
    toString: `Box(${x})`
})

for example:

lets take this code

const halfTheFirstLargestNumber = xs => {
    const found = xs.filter(x => x >= 20)
    const answer = first(found) / 2
    return `The answer is ${answer}`
}

using functor

const halfTheFirstLargestNumber = xs =>
    Box(xs),
    .map (xs => xs.filter(x => x >= 20))
    .map (found => first(found) / 2)
    .fold (answer =>  `The answer is ${answer}`)


## Either Monad

Either is a common type in functional Languages. Is commonly called a discriminated union. Which means an Either type can contain any of the types it sums up.

- Either is a functor and a monad, it has both a map, a chain method, and a fold method. 
- The Either type respects function purity and is effectively an if else statement, but inverted.

- fromNullable is a null check for every function and avoids repetition
from nullable has the next structure:

const Right = x =>
({
 chain: f => f(x),
 map: f => Right(f(x)),
 fold: (f, g) => g(x),
 toString: () => `Right(${x})`
})

const Left = x =>
({
 chain: f => Left(x),
 map: f => Left(x),
 fold: (f, g) => f(x),
 toString: () => `Left(${x})`
})


const from nullable = x =>
    x != null Right(x) : Left()

## Task Monad

Task monad is the functional equivalent of promise. Similarly to promise, Task takes resolve and reject functions, but in reversed order. A Task monad only starts running once it reaches the fork method, and this way avoids race conditions.

- a traversable interface is when you can leap from different types


