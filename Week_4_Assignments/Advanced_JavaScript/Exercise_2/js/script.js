/*
Exercise 1
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it 
and returns an array of them.

The function should not modify the array. It should return the new array. For instance:

let arr = [5, 3, 8, 1]

let filtered = filterRange(arr, 1, 4)

alert( filtered )  // 3,1 (matching values)

alert( arr )      // 5,3,8,1 (not modified)

*/

function filterRange(arr, a, b) {
  let newArr = [];
  arr.forEach(function(num) {
    if(num >= a && num <= b){
      newArr.push(num);
    }
  });
  return newArr;
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr );      // 5,3,8,1 (not modified)

/* 
Exercises 2
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 } 
let mary = { name: "Mary", age: 28 }

let users = [ john, pete, mary ]

let names = // ... your code 

*/
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 }; 
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(user => user.name);
alert( names ); // John, Pete, Mary


/*
Exercises 3
Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.

The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 29 }

let arr = [ john, pete, mary ]

alert( getAverageAge(arr) )   // (25 + 30 + 29) / 3 = 28
*/

function getAverageAge(users){
  let ages = users.map(user => user.age);
  let ageAvg = 0;
  ages.forEach(function(age) {
    ageAvg+=age;
  });
  ageAvg = ageAvg/ages.length;
  return ageAvg;
}

let johna = { name: "John", age: 25 };
let petea = { name: "Pete", age: 30 };
let marya = { name: "Mary", age: 29 };

let arra = [ johna, petea, marya ];
alert( getAverageAge(arra) );   // (25 + 30 + 29) / 3 = 28

