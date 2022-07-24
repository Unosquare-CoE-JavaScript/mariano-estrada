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

- newer syntax for creating functions

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

### State

State is a key concept in React

The state object is where you store property values that belongs to the component.

When the state object changes, the component re-renders.

- useState is one of the most important React Hooks

Whenever you add two way binding it is a controlled component

#### Stateful vs Stateless component

In React, a stateful component is a component that holds some state. Stateless components, by contrast, have no state. 

## JSX Limitations
The main limitation JSX has is that if we have to adjacent tags with no wrapping around them we get an error
for example:

return(
    <h1> hello </h1>
    <h1> This will not work </h1>
)

You cant return more than one root JSX element

This is why you shoud always wrap root elements

return(
    <div>
        <h1> hello </h1>
        <h1> hello </h1>
    </div>
)

- React know how to work with arrays of JSX elements however it is needed that each element has an unique key prop
- Since react requires you to wrap elements it creates a new problem called div soup it looks like this:

<div>
    <div>
        <div>
            <h1>Hello</h1>
        </div>
    </div>
</div>

This can be solved creating custom wrapper components

Another solution for the last problem you could also use fragments

A fragment its an empty wrapper component, it doesnt render any html element but it helps to comply JSX requirements

Fragments look like this: 

    <>
        <h1>Hello</h1>
    </>

## React portals

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component. 

## Refs

Refs is the shorthand used for references in React. It is similar to keys in React. It is an attribute which makes it possible to store a reference to particular DOM nodes or React elements. It provides a way to access React DOM nodes or React elements and how to interact with it. It is used when we want to change the value of a child component, without making the use of props.

## Controlled vs Uncontrolled Components

In React, Controlled Components are those in which form data is handled by the component’s state
Uncontrolled components are those for which the form data is handled by the DOM itself.

## Effects, Reducers and Context

Effects (or side effects) are not predictable because they are actions which are performed with the "outside world." We perform a side effect when we need to reach outside of our React components to do something. Performing a side effect, however, will not give us a predictable result.

## Use Effect

## Use Reducer
The useReducer Hook is similar to the useState Hook.

It allows for custom state logic.

If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.

Use reduce has the following syntax:

const[state, dispatchFn] = useReducer(reducerFn, initialState, initFn)

Where:

- state = the initial state snapshot
- dispatchFn = a function that can be used to dispatch a new action
- reducerFn = a function that is triggered automatically after a function gets dispatched
- inital state = initial state
- initFn = a function to set the initial state programmatically

## useState vs useReducer

We should use useReducer when using useState starts becoming very cumbersome and we are getting bugs and unexpected behavior

* useState
- Is the main state management tool
- Great for independent state
- Great if the pieces are individual

* useReducer
- Great if you need 'more power'
- Should be considered if you have related pieces of data
- Should be used with more complex state data

## React Context

React context allows us to manage state behind the scenes.
React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
In other words, React context allows us to share data (state) across our components more easily.

### Context Limitations

- Context is not optimized for high frequency charges
- Context should not be used to replace all component comunication or props

## React Behind the Scenes

React is just a library that manages components, props, state and the components state
- React hands all of that information off of the interface that it is working with

React cares about:

- Props: data passed from one component to another one
- State: internal data
- Context: component wide data

React works with two DOMs

- ReactDom: Interface to the web
- RealDom: What the user sees

The virtual dom determines how the component tree looks like and compares it to how it should looK

Whenever you change state in a component that state gets re evaluated(the function of the component runs again)

- Re evaluating components is different than re evaluating the dom

React memo is used to avoid unnecesary re evaluations

## Class based components

Components can also be built with classes, this is however optional but it was the method used some time ago

class based components look like this

class Product extends Component {
    render(){
        return(
            <h1>hello</h1>
        )
    }
}

Traditionally prior to React 16.8 you had to use class bases components to manage state and side effects, in that version hooks were introduced for functional components

- class based components cant use hooks

this a class based component

class User extends Component{
  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  }
}

this is the same component but in the functional form

const User = (props) => {
    return <li className={classes.user}>{props.name}</li>;
 };

both components can work together

In modern react we typically stick to functional components because they are more flexible however class based components are still a good option and can work with class based components

Class based components should be used when:

- You prefer them
- You are working on an existing project where class based components are being used
- You build an Error Boundary

### Class based component lifecycle

- componentDidMount() is called once the component is mounted, is almost the equivalent of using useEffect with no dependencies
- componentDidUpdate() is called once the component was re evaluated and re rendered, is almost as using useEffect with something in its dependencies
- componentWillUnmounted() is called once the component unmounts, is like useEffect with a cleanup function

### Error boundary

Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

They allow you to cath an error in an elegant way insted of having your application crashed.

## Custom hooks

Custom hooks are just regular functions just as the regular hooks but they contain custom stateful logic creating re usable functions

- Unlike regular functions custom react hooks can use other react hooks and react state

## Forms

Forms can be difficult to work with because they can assume different states for example there can be one form where only one input is valid as well as there can be somes where there are several valid

There are several types of validation for example:

- When the form is submited
- When an input is loosing focus
- On every keystroke

## Redux

Redux is a state management system for cross component or app wide state

### What is cross component and app wide state?

- Local state is data that changes and affects the UI and belongs to a single component, it should be managed with useState or useReducer
-  State that affects more components is cross component state, it is passed through props (prop drilling)
-  App wide is state that affects all of the components, it requires react context or redux

### Redux vs context

Context has some potential disadvantages like:
- Complex setup/management
- Performance

### How Redux Works

Redux is all about having one central store, you never have more than one store, the data stored is used on the components of our app.

Then our components subscribe to the store and when the data changes the data changes the store notifies and the components get the data they need and use it.

- In redux components never directly manipulate the store data

A reducer function is responsible for mutating (or changing) the state data

Components dispatch actions (or trigger them) an action is an object that describes the operation the reducer should perform

