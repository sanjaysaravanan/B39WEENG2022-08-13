var str = "Some Content"; // string
var num = 100;// Number
var isPrime = false; // Boolean
var nothing = undefined; // undefined
var nothing2 = null; // null

console.log(str, num, isPrime, nothing, nothing2);
console.log(typeof str, typeof num, typeof isPrime, typeof nothing, typeof nothing2);

// ! ---> negetion / not
function isEven (numToCheck) {
  return !Boolean(numToCheck % 2); // ---> true or false
}

console.log(isEven(99));

function reverseStr(str) {
  var arr = str.split(''); // some -> s o m e

  var reversedStr = '';

  for(var i=arr.length - 1;i >=  0;i--){
    reversedStr = reversedStr + arr[i];
  }
  console.log(reversedStr)
}

reverseStr("Some");

if (nothing2) { // undefined & null will be considered false condition
  console.log("True at Line 31");
} else {
  console.log("False at Line 33");
}

// Question No 1
console.log(100 == 100); // ans 
console.log(100 == "100"); // ans
console.log(100 === 100); // ans
console.log(100 === "100"); // ans


// == will compare only content not the type
// === will compare content along with type


// Composite Datatypes

// Array

let arr = [1, "String", undefined, 4, null, [1,2,3], {mark: 100, sub: "maths"}];
console.log(arr);

let arr2 = [];

arr2[100] = 25;

console.log(arr2); // contents of arr2
console.log(arr2[50]);
console.log(arr2.length); // length of arr2

// accessing values
console.log(arr[1]);


// Object

// key <-> value pair

const obj1 = {
  'name': "Sanjay",
  "role": "developer",
  age: 40,
  dob: 'yyyy-mm-dd',
  skills: ['python', "js", 'c'],
};
console.log(obj1);
console.log(obj1['role']);
console.log(obj1.role);




