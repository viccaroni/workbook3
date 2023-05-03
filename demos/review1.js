"use strict";

//greeting takes a name parameter
function greeting(first, last) {
  return `Hello ${first} ${last}`;
}
let firstName = "Vic";
let lastName = "Hernandez";
//calling/invoking greeting function and passing the firstName argument
//catching and assigning the return value of the function into the message variable
let message = greeting(firstName, lastName);
console.log(message);

function animals(pet1, pet2) {
  return `vic has two pets named ${pet1} and ${pet2}`;
}
let firstPet = "Brisket";
let secondPet = "Pixel";
let response = animals(firstPet, secondPet);
console.log(response);
