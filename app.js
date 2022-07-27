// //myNumbers
// var myNumbers = [1,2,3,4,5,6,7,8,9,10];

// //myColors
// var myColors = ["red", "blue", "green", "yellow", "orange", "purple"];

// console.log(myColors[0]);


// //length of myColors
// console.log(myColors.length);

// //string to array
// var string = "hello world";

// console.log(string[1]);

// //conditionals
// var myNumber = 5;

// //boolean - true or false
// if(myNumber > 10){
//     console.log("myNumber is greater than 10");
// }else if(myNumber < 10){
//     console.log("myNumber is less than 10");
// }
    

// //comparison operators //==, !=, <, >, <=, >=

// if("2" === 2){
//     console.log("true");
// }

// //truthy and falsy values
// //falsy values: undefined, null, 0, "", NaN
// //truthy values: all other values

// if(""){
//     console.log("blank");
// }else{
//     console.log("not blank");
// }

// //logical operators
// //&& - and
// //|| - or
// //! - not

// if( 2===2 || "2" === 3){
//     console.log("it's working");
// } else{
//     console.log("it's not working");
// }

// //order of operations
// //PEMDAS
// //P - Parenthesis
// //E - Exponent
// //M - Multiplication
// //D - Division
// //A - Addition
// //S - Subtraction

// //switch statements //case sensitive //break is implied at the end of each case
// var myNumber = 5;

// switch(myNumber){
//     case 1: "one";
//         console.log("one");
//     case 2: "two";
//         console.log("two");
//     case 3: "three";
//         console.log("three");
//     case 4: "four";
//         console.log("four");
//     case 5: "five";
//         console.log("five");
//     default: "not a number";
// }


// //for loops
// //for(initialization; condition; increment){
// //    //code to run
// //}

// // i= interator and is commonly used to loop through arrays

// for(var i = 0; i < 10; i++){
//     console.log(i);
// }

// var favFoods = ["pizza", "burgers", "sushi", "steak", "salad"];

// for(var i = 0; i < favFoods.length; i++){
//     console.log(favFoods[i]);
// }

// // % - modulus - remainder of a division
// // %= - modulus assignment

// var newNumbers = [1,2,3,4,5,6,7,8,9,10];

// for(var i = 0; i < newNumbers.length; i++){
//     if(newNumbers[i] % 2 === 0){
//         console.log(newNumbers[i]);
//     }
// }

// var counter = 0;
// while(counter < 5 ){
//     console.log(counter);
//     counter++;
// }


// //functions
// //function name(parameters){
// //    //code to run
// //}

// //dry - don't repeat yourself
// //reuse - reuse code

// //statement - execute a block of code
// //expression - evaluates to a value

// //function declaration
// function sum(a, b){
//     return a + b;
// }

// //function expression
// var sum = function(a, b){
//     return a + b;
// }


// //parameters - arguments
// //arguments - parameters

// function sum(num1, num2){
//     return num1 + num2;
//     console.log(num1 + num2);
// }

// //stop the function from running - return

// //call the function - invoke
// //invoke the function
// var result = sum(11,11); //arguments
// console.log(result);

// function myFunction(data){
//     console.log(data);
// }

// myFunction(1,2,3,4,5);
// myFunction("hello");
// myFunction(true);
// myFunction(["a", "b", "c"]);

// function loopthrough(array){
//     for(var i = 0; i < array.length; i++){
//         console.log(array[i]);
//     }
// }

// loopthrough(["a", "b", "c"]);

// //javascript objects
// //key value pairs
// //object literal
// //object constructor
// //object instance

// var person = {
//     name: "Rick Sanchez",
//     age: 50,
//     isMarried: false,
//     hobbies: ["Interstellar Travel", "Szechuan Sauce", "Squanching"],
//     friends: ["Morty", "Summer", "Beth", "Jerry"],
//     address: { 
//         street: "123 Main St",
//         city: "New York",
//         state: "NY"
//     },
// }

// //two notations for accessing properties
// //dot notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.isMarried);
// console.log(person.hobbies);
// console.log(person.friends);
// console.log(person.address.street);

// //bracket notation [index]

// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["address"]["city"]);

// //javascript objects 2

// var car = {
//     make: "Ford",
//     model: "Mustang",
//     year: "1964",
//     color: "red",
//     honkSound: "OoooWeeeeee",
//     honk: function(){
//         console.log(this.honkSound);
//     },
//     passengers: 5,
//     convertible: false,
//     mileage: 0,
//     started: false,
// };

// //objects can have functions - methods
// //functions are properties of objects

// car.honk();

// //this - refers to the object

// //objects and arrays are passed by reference

// var otherCar = car;

// otherCar.type = "convertible";
// console.log(car.type); //can be switced back to car

// //let - block scope
// //var - function scope
// //const - block scope

// function isLessThan(toCompare, inQuestion){
//     let phrase = "";
//     if(toCompare < inQuestion){
//         phrase = "is less than";
//     } else{
//         phrase = "is not less than";
//     }
//     return phrase;
// }

// console.log(isLessThan(5, 10));

// //var
// let name = "Rick";
// let age = 50;
// let isAdmin = true;

// const pets = ["cat", "dog", "fish"];
// const friends = ["Morty", "Summer", "Beth", "Jerry"];

// // JS Convention - camelCase
// // PascalCase
// // snake_case
// // kebab-case

// //casing - capitalization
// //pascal case - first letter is capitalized
// //camel case - first letter is lowercase, rest of letters are capitalized
// //snake case - first letter is lowercase, rest of letters are lowercase
// //kebab case - first letter is lowercase, rest of letters are lowercase

// //naming
// //avoid using reserved words
// //avoid using numbers
// //avoid using special characters
// //avoid using spaces

// //html tags
// //<tag>
// //<tag attribute="value">

// //white space
// //tabs - 4 spaces per tab (tabs are not visible) (indentation)
// //spaces
// //new lines

// //comments - single line 
// //multi-line comments - /* */
// //single-line comments - //

// //unix commands
// //ls - list files
// //cd - change directory
// //mkdir - make directory
// //touch - create a file
// //rm - remove a file
// //mv - move a file
// //cp - copy a file
// //cat - concatenate files


// //dom - document object model
// //html - hypertext markup language
// //css - cascading style sheets
// //js - javascript
// //jquery - javascript library
// //ajax - asynchronous javascript and xml
// //json - javascript object notation

//select a single element from the DOM - document.getElementById()
//select multiple elements from the DOM - document.getElementsByClassName()
//select multiple elements from the DOM - document.getElementsByTagName()
//select multiple elements from the DOM - document.querySelector()
//select multiple elements from the DOM - document.querySelectorAll()


//common events - click, mouseover, mouseout, mouseenter, mouseleave, keydown, keyup, keypress, focus, blur, change, submit, resize, scroll, dblclick, contextmenu

document.getElementById("my-button").addEventListener("click", function(){
    console.log("clicked");
});

var button = document.getElementById("button")
function handleButtonClick(){
    console.log("clicked");
};

button.addEventListener("click", handleButtonClick); //event listener - event, function to run when event happens (later)

document.getElementById("header").addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "red";
});