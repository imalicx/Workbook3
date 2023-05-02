"use strict";

function displayLabel(Fullname, address, city, state, zip){
    let shippingaddress = Fullname + address + city + state + zip;
    console.log("The address is " + shippingaddress);
}

function addNumbers(num1, num2){
let sumnumber = num1 + num2;
console.log(sumnumber);
}

function displayreceipt(totaldue, amountpaid){
    let changedue = totaldue - amountpaid;
    console.log("The amount due from this transaction is " + changedue);
}

displayLabel("Malic,", " 954 Avengers Tower ", "Hollywood,"," FL ", "33026");