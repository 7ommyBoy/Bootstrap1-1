// Tommy Works

// const $ = selector => document.querySelector(selector);



var $ = function (id) { return document.getElementById(id); };
var calculateChange = function () {
//This will get the value entered by someone 
var cents = parseInt($("cents").value); 

//If the number doesnt fit in range it will display this error
if (cents <= 0 || cents > 99) {
alert("Please enter a valid number between 0 and 99”.");

}

//To find quarters
var quarters = Math.floor(cents / 25);
//To find remaining cents
cents %= 25;
//This will display the number of quarters in the textbox
$("quarters").value = quarters

//To find dimes
var dimes = Math.floor(cents / 10);
//To find remaining cents
cents %= 10;
//This will display the number of dimes in the textbox
$("dimes").value = dimes

//To find nickels
var nickels = Math.floor(cents / 5);
//To find remaining cents
cents %= 5;
//This will display the number of nickels in the textbox
$("nickels").value = nickels

//To find pennies
var pennies = Math.floor(cents / 1);
//To find remaining cents
cents %= 1;
//This will display the number of pennies in the textbox
$("pennies").value = pennies

};

window.onload = function () {

$("calculate").onclick = calculateChange;

};
