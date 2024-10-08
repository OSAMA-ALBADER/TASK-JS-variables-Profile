let fullName = "osama albader";
let yearOfBirth = 2000;
let hobby = "playing football";
let funFact = "i sleep a lot";
const image =
  "https://plus.unsplash.com/premium_photo-1682096259050-361e2989706d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8eW91bmclMjBtYW58ZW58MHx8MHx8fDA%3D";

let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
const fullNameString = `My name is ${fullName}`;
const yearOfBirthString = `i am  ${age}`;
const hobbyString = `i like to do ${hobby}`;

let stars = 0;

function incrementBy1() {
  stars = stars + 1;
}
function decrementBy1() {
  stars = stars - 1;
}

function incrementBy2() {
  stars = stars + 2;
}
function decrementBy2() {
  stars = stars - 2;
}
