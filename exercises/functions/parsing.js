"use strict";

// let firstName = "Brenda ";
// let lastName = "Kaye";
// let fullName = firstName + lastName;
// let info = `
// Name: ${fullName}
// First Name: ${firstName}
// Last Name: ${lastName}
// `;
// let positionOfSpace = fullName.indexOf(" ");
// console.log("The position of the space is:" + positionOfSpace);
// console.log(info);

let name = "Victoria Hernandez";
let positionOfSpace = name.indexOf(" ");
console.log(positionOfSpace);

let first = name.substring(0, positionOfSpace);
console.log(first);

let last = name.substring(positionOfSpace + 1);
console.log(last);

function parseAndDisplayName(name1, name2, name3) {
  let userList = `
User: ${name1}
User: ${name2}
User: ${name3}
`;
  console.log(userList);
}
const user1 = "Brenda Kaye";
const user2 = "Ian Auston";
const user3 = "Siddalee Grace";
parseAndDisplayName(user1, user2, user3);
