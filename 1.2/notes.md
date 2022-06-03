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

