// Exercise 1:
/* Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false if absent)
*/
let user = {
  name: "John",
  years: 30,
  //isAdmin: true
}


const {name, years : age, isAdmin = false} = user;

console.log(isAdmin);

/*
Exercise 2
Give the right name:

Create the variable with the name of our planet. How would you name such a variable?
Create the variable to store the name of the current visitor. How would you name that variable?
*/

const ourPlanet = "Earth";
let currentVisitor;

/* 
Exercise 3
Look at the code. What will be the result of the call at the last line and why?
let phrase = "Hello"

if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()


Solution: sayHi() is defined inside the if block so it will not be available outside the if block. So it will be undefined.
*/

/* 
Exercise 4
Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.
*/

const usernew = {};
usernew.name = "John";
usernew.surname = "Smith";
usernew.name = "Pete";
delete usernew.name;

/*
Exercise 5
Is it possible to change an object declared with const, how do you think and why?

const user = {
  name: "John"
}

// does it work?
user.name = "Pete"

Yes, this will update the name property/state in the user object. I think it is because we are not 
changing the object user we are updating its property only.

*/


/*
Exercise 6
We have an object storing the salaries of our team:

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}
Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.
*/

let salaries = {
  Fred: 100,
  Ted: 160,
  Ghaith: 130
}

// if object is not going to change
// let sum = 0;
// if(Object.values(salaries).length !== 0){
// 	sum = salaries.Fred + salaries.Ted + salaries.Ghaith;
// }

// if object is dynamic (going to change)
let sum = 0;
for (let salary of Object.values(salaries)) {
	sum += salary;
}

console.log(sum);

/*
Exercise 7
Rewrite this if using the ternary operator '?':

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}

*/

let a = 1;
let b = 2;
let result = (a+b < 4) ? 'Below' : 'Over';
console.log (result);


/*
Exercise 8
Rewrite if..else using multiple ternary operators '?'.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/

let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : '';