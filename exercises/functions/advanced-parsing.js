"use strict";

function parseAndDisplayName(name) {
  let positionOfFirstSpace = name.indexOf(" ");
  let positionOfLastSpace = name.lastIndexOf(" ");

  let first = name.substring(0, positionOfFirstSpace);
  let middle = name.substring(positionOfFirstSpace, positionOfLastSpace);
  let last = name.substring(positionOfLastSpace);
  let output = `
Name: ${name}
FirstName: ${first}
MiddleName: ${middle}
LastName: ${last}
`;
  console.log(output);
}
parseAndDisplayName("Cher");
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Dana Lynn Wyatt");
