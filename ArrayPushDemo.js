var firstName = [];
var lastName = [];

var userFirstName = prompt("What is your first name?");
firstName.push(userFirstName);

var userLastName = prompt("What is your last name");
lastName.push(userLastName);

window.alert(firstName[0] + " " + lastName[0] + " " + firstName.length + " " + lastName.length);

