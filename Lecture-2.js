How many Types of Variables in Javascript?

There are three types of Variables
1.Let
2.Var
3.Const

What is Let Variable in Javascript?
let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, 
unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope.

Example: 
let x = "John Doe";

let x = 0;

What is Var Variable in Javascript?
The var statement declares a variable. Variables are containers for storing information.

var x = "John Doe";

var x = 0;

What is Const Variable in Javascript?
The const declaration creates block-scoped constants, much like variables declared using the let keyword.

Difference between Let,Const and Var?
  
The main difference between "var", "let", and "const" is in their scope and assignability.
Variables declared with "var" have the function-level scope and can be reassigned,
while "let" and "const" variables have the block-level scope and "let" can be reassigned, but "const" cannot.
