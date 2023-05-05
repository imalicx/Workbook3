"use script";

//names

let fullName = "Tony Stark";
let nameArray = fullName.split(" ");
let firstName = nameArray[0];
let lastName = nameArray[1];

console.log("Name: " + fullName);
console.log("First name: " + firstName);
console.log("Last name: " + lastName);

// parse ruse

function parseAndDisplayName(fullName) {
    let spaceIndex = fullName.indexOf(" ");
    let firstName = fullName.slice(0, spaceIndex);
    let lastName = fullName.slice(spaceIndex + 1);
    console.log("First name: " + firstName);
    console.log("Last name: " + lastName);
  }
  
  parseAndDisplayName("Stephen Strange");
  parseAndDisplayName("Bruce Banner");
  