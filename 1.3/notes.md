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


