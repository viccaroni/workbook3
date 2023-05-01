"use strict";
function displayMailingLabel(name, address, city, state, zip) {
  //   console.log(name);
  // console.log(address);
  // console.log(city);
  // console.log(state);
  // console.log(zip);
  let addressLabel = `
 ${name}
 ${address}
 ${city} ${state} ${zip}
 `;
  console.log(addressLabel);
}
const fullName = "Victoria Hernandez";
const homeAddress = "123 Blazit rd";
const cityLocation = "Pittsburger,";
const stateName = "Pencilvania";
const zipCode = 80082;
displayMailingLabel(fullName, homeAddress, cityLocation, stateName, zipCode);
