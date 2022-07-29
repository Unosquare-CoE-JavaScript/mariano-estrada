# React Testing

## React Testing Library

Its not just a library but also opinionated,

- React testing library wants us to test our software the way users use it
- Allows us to find elements by accesibility markers, not IDs

### React Testing Library vs Jest

React Testing Library
Provides a Virtual DOM for tests

Jest
Finds tests, runs them and determines wether they pass or not

### Assertions

Assertions ara what determines if the test passes or fails

- They all start with the expect keyword

A matcher is what we compare the assertion with

for example:

expect(element).toBeInTheDocument()

here expect is the assertion and the matcher is toBeInTheDocument

## Jest

While react testing library helps us with:
- Render components into Virtual DOM
- Searching Virtual DOM
- Interacting with the Virtual DOM

But it needs a test runner

Jest is recomended for the testing library, it comes with create-react-app

- npm test runs jest in watch mode

Jest in watch mode:

- Watch for changes in files since the last commit
- Only runs test related to this files
- No changes? No commits

Jest has two arguments

- string description
- test function

### TDD Test Driven Development

It means to write the tests before the code, write code according the tests
it is also known as red-green testing.



