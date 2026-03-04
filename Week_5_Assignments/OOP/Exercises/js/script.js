/* Exercise 1 - Classes
Create a class called `Person` with the following properties and methods:

1 - Properties:

 `name` (string)
 `age` (number)
2 - Methods:

 `introduce()`: This method should return a string introducing the person, 
 for example: "Hi, my name is John and I am 25 years old."

Exercise 2 - This
Create a new object using the `Person` class you defined in Exercise 1. Name the object `person1` and set the `name` 
and `age` properties accordingly. Then, create a function called `describePerson` that takes a callback function as 
an argument. Inside the `describePerson` function, call the callback function with `person1` as the `this` context.

*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const person1 = new Person("John", 25);
console.log(person1.introduce());


function describePerson(callback) {
  callback.call(person1);
}

function callbackFunction() {
  console.log(this.introduce());
}

describePerson(callbackFunction);


/*
Exercise 3 - Promises
Write a function called `wait` that takes a number as an argument (representing milliseconds) and returns a Promise. 
The Promise should resolve after the given number of milliseconds, using `setTimeout`. The resolved value can be 
anything you choose.
*/

function wait(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Waited ${milliseconds} milliseconds`);
    }, milliseconds);
  });
}

wait(1000).then((message) => {
  console.log(message);
});

/*
Exercise 4 - Submission Instructions
Create an HTML file and a corresponding JavaScript file to complete the assignment. Implement the tasks in the 
JavaScript file and include it in the HTML file using the `<script>` tag. Test your code thoroughly, ensuring that 
each task is working correctly. Save both files and submit them together.
*/

