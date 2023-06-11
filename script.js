// ================ 3
var a;
a = 7;

// ================ 4
var a;
a = 7;
var b;
b = a;

// ================ 5
var a = 9;

// ================ 6
var myFirstName = "Vasya";
var myLastName = "Pupkin";

// ================ 7
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";

// ================ 8
var studlyCapVar;
var properCamelCase;
var titleCaseOver;
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// ================ 9
let catName = "Oliver";
let catSound = "Meow!";

// ================ 10
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// ================ 11
// const sum = 10 + 10;

// ================ 12
const difference = 45 - 33;

// ================ 13
const product = 8 * 10;

// ================ 14
const quotient = 66 / 33;

// ================ 15
// let myVar = 87;
// myVar++;

// ================ 16
let myVar = 11;
myVar--;

// ================ 17
const ourDecimal = 5.7;
let myDecimal = 5.7;

// ================ 18
// const product = 2.0 * 2.5;

// ================ 19
// const quotient = 4.4 / 2.0;

// ================ 20
const remainder = 11 % 3;

// ================ 21
// let a = 3;
// let b = 17;
// let c = 12;
// a += 12;
// b += 9;
// c += 7;

// ================ 22
// let a = 11;
// let b = 9;
// let c = 3;
// a -= 6;
// b -= 15;
// c -= 1;

// ================ 23
// let a = 5;
// let b = 12;
// let c = 4.6;
// a *= 5;
// b *= 3;
// c *= 10;

// ================ 24
// let a = 48;
// let b = 108;
// let c = 33;
// a /= 12;
// b /= 4;
// c /= 11;

// ================ 25
// const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// ================ 26
// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// ================ 27
// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// ================ 28
// const myStr = "This is the start." + " This is the end.";

// ================ 29
// let myStr = "This is the first sentence.";
// myStr += " This is the second sentence.";

// ================ 30
// const myName = "Sashka";
// const myStr = "My name is " + myName + " and I am well!";

// ================ 31
const someAdjective = "good";
let myStr = "Learning to code is ";
myStr += someAdjective;

// ================ 32
// let lastNameLength = 0;
// const lastName = "Lovelace";
// lastNameLength = lastName.length;

// ================ 33
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";
// firstLetterOfLastName = lastName[0];

// ================ 34
// let myStr = "Jello World";
// myStr = "Hello World"; 

// ================ 35
// const lastName = "Lovelace";
// const thirdLetterOfLastName = lastName[2];

// ================ 36
// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length-1];

// ================ 37
const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length-2];

// ================ 38
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The " + myAdjective + " a " +  myNoun + " " + myVerb + " " + myAdverb;

// ================ 39
// const myArray = ["peanut butter", 2, "bread"];

// ================ 40
// const myArray = [["Tom", 21], ["Bob", 22]];

// ================ 41
// const myArray = [50, 60, 70];
// let myData = myArray[0];

// ================ 42
// const myArray = [18, 64, 99];
// myArray[0] = 45;

// ================ 43
// const myArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14],
// ];
// const myData = myArray[2][1];

// ================ 44
// const myArray = [["John", 23], ["cat", 2]];
// myArray.push(["dog", 3]);

// ================ 45
// const myArray = [["John", 23], ["dog", 3]];
// const removedFromMyArray = myArray.shift();

// ================ 46
// const myArray = [["John", 23], ["dog", 3]];
// myArray.shift();
// myArray.unshift(["Paul", 35]);

// ================ 47
const myList = [["Chocolate Bar", 15], ["Chocolate Bar1", 16], ["Chocolate Bar2", 17], ["Chocolate Bar3", 18], ["Chocolate Bar4", 19]];

// ================ 48
function reusableFunction () {
    console.log("Hi World");
}
reusableFunction();

// ================ 49
function functionWithArgs (param1, param2) {
    console.log(param1 + param2);
}
functionWithArgs(2, 5);

// ================ 50
function timesFive(num) {
    return num * 5;
}

// ================ 51
const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

// ================ 52
let myGlobal = 10;
let oopsGlobal;
function fun1() {
  oopsGlobal = 5;
}
function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
//   console.log(output);
}

// ================ 53
function myLocalScope() {
    let myVar = 5;   
    // console.log('inside myLocalScope', myVar);
}
myLocalScope();
// console.log('outside myLocalScope', myVar);

// ================ 54
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
myOutfit();

// ================ 55
// let sum = 0;
// function addThree() {
//   sum = sum + 3;
// }
// function addFive() {
//   sum = sum + 5;
//   return undefined;
// }
// addThree();
// addFive();

// ================ 56
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);

// ================ 57
function nextInLine(arr, item) {
    arr.push(item);
    return arr.shift();
}
let testArr = [1, 2, 3, 4, 5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

// ================ 58
function welcomeToBooleans() {  
    return true;
}

// ================ 59
function trueOrFalse(wasThatTrue) {
    if(wasThatTrue) {
      return "Yes, that was true";
    } else {
      return "No, that was false";
    }  
}

// ================ 60
function testEqual(val) {
    if (val == 12) {
      return "Equal";
    }
    return "Not Equal";
}
testEqual(10);

// ================ 61
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

// ================ 62
function compareEquality(a, b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

// ================ 63
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

// ================ 64
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

// ================ 65
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
  if (val > 10) {  
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

// ================ 66
function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }
  if (val >= 10) { 
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

// ================ 67
function testLessThan(val) {
  if (val < 25) {  
    return "Under 25";
  }
  if (val < 55) {  
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

// ================ 68
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

// ================ 69
function testLogicalAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}
testLogicalAnd(10);

// ================ 70
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

// ================ 71
function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

// ================ 72
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
testElseIf(7);

// ================ 73
function orderMyLogic(val) {
  if (val < 10 && val >= 5) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

// ================ 74
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num >= 5 && num < 10) {
    return "Small";
  } else if (num >= 10 && num < 15) {
    return "Medium";
  } else if (num >= 15 && num < 20) {
    return "Large";
  } else {
    return "Huge";
  }
}
testSize(7);

// ================ 75
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3	) {
    return "Go Home!";
  }
}
golfScore(5, 4);

// ================ 76
function caseInSwitch(val) {
  let answer = "";
  switch (val) {
    case 1: 
      answer = "alpha";
      break;
    case 2: 
      answer = "beta";
      break;
    case 3: 
      answer = "gamma";
      break;
    case 4: 
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

// ================ 77
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
    case "a": 
      answer = "apple";
      break;
    case "b": 
      answer = "bird";
      break;
    case "c": 
      answer = "cat";
      break;
    default: 
      answer = "stuff";
      break;
  }
  return answer;
}
switchOfStuff("a");

// ================ 78
function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }
  return answer;
}
sequentialSizes(1);

// ================ 79
function chainToSwitch(val) {
  let answer = "";
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
  }
  return answer;
}
chainToSwitch(7);

// ================ 80
function isLess(a, b) {
  return a < b;
}
isLess(10, 15);

// ================ 81
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
abTest(2,2);

// ================ 82
let count = 0;
function cc(card) {
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0){
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

// ================ 83
const myDog = {
  name: "Cat",
  legs: 4,
  tails: 1,
  friends: ["Bob", "Toby", "Jim"]
}

// ================ 84
// const testObj = {
//   "hat": "ballcap",
//   "shirt": "jersey",
//   "shoes": "cleats"
// };
// const hatValue = testObj.hat;   
// const shirtValue = testObj.shirt; 

// ================ 85
// const testObj = {
//   "an entree": "hamburger",
//   "my side": "veggies",
//   "the drink": "water"
// };
// const entreeValue = testObj["an entree"];  
// const drinkValue = testObj["the drink"]; 

// ================ 86
const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
const playerNumber = 16;
const player = testObj[playerNumber];

// ================ 87
// const myDog = {
//   "name": "Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
// myDog.name = "Happy Coder";

// ================ 88 
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"]
// };
// myDog.bark = "woof";

// ================ 89
// const myDog = {
//   "name": "Happy Coder",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["freeCodeCamp Campers"],
//   "bark": "woof"
// };
// delete myDog.tails;

// ================ 90
function phoneticLookup(val) {
  let result ="";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank"
  };
  result = lookup[val];
  return result;
}
phoneticLookup("charlie");

// ================ 91 
function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
    return "Not Found";
  }  
}

// ================ 92
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Madonna",
    "title": "Hello World!",
    "release_year": 1999,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
  }
];

// ================ 93
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
const gloveBoxContents = myStorage.car.inside["glove box"];

// ================ 94
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};
function updateRecords(records, id, prop, value) {
  if (value === "") {
    delete records[id][prop];
  } else if (prop === "tracks") {
    records[id][prop] ??= [];
    records[id][prop].push(value);
  } else {
    records[id][prop] = value;
  }
  return records;
}
updateRecords(recordCollection, 5439, "artist", "ABBA");

// ================ 95
// const myArray = [];
// let i = 5;
// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }

// ================ 96
// const myArray = [];
// for (let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }

// ================ 97
// const myArray = [];
// for (let i = 1; i < 10; i++) {
//   if (i % 2 != 0) {
//     myArray.push(i);
//   }
// }

// ================ 98
// const myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }

// ================ 99
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}

// ================ 100
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
}
  return product;
}
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// ================ 101
// const myArray = [];
// let i = 10;
// do {
//   myArray.push(i);
//   i++;
// } while (i < 10);

// ================ 102
// function sum(arr, n) {
//   if(n <= 0) {
//     return 0;
//   } else {
//     return sum(arr, n - 1) + arr[n - 1];
//   }
// }

// ================ 103
const contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];
function printValues(){
  for(let a = 0; a < contacts.length; a++){
      contacts[a].firstName;
  }   
}
function isNameExist(name ){
  for(let a = 0; a < contacts.length; a++){
      if (contacts[a].firstName == name)
          return true;
  }
  return false;
}
function isPropertyExist(prop){
  for(let a = 0; a < contacts.length; a++){
      if (contacts[a].hasOwnProperty (prop))
          return true;
  }
  return false;
}
function lookUpProfile(name, prop) {
      if(!isNameExist(name)) {
          return "No such contact";
      } else if(!isPropertyExist(prop)) {
          return "No such property";
      }
      for(let a = 0; a <  contacts.length; a++) {
      if(contacts[a].firstName == name && contacts[a].hasOwnProperty(prop)){
              return contacts[a][prop];
          }   
      }
}
lookUpProfile("Akira", "likes");

// ================ 104
function randomFraction() {
  return Math.random();
}

// ================ 105
function randomWholeNum() {
  return Math.floor(Math.random() * 10);;
}

// ================ 106
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// ================ 107
function convertToInteger(str) {
  return parseInt(str);
}
convertToInteger("56");

// ================ 108
function convertToInteger(str) {
  return parseInt(str, 2);
}
convertToInteger("10011");

// ================ 109
function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal";
}
checkEqual(1, 2);

// ================ 110
function checkSign(num) {
  return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}
checkSign(10);

// ================ 111
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const countdownArray = countdown(n - 1);
    countdownArray.unshift(n);
    return countdownArray;
  }
}

// ================ 112
function rangeOfNumbers(startNum, endNum) {
  if (startNum == endNum) {
    return [startNum];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
}

// ================ ES6 ================
// ================ 1
function checkScope() {
  "use strict";
    let i = "function scope";
    if (!true) {
      i = "block scope";
      console.log("Block scope i is: ", i);
    } else {
    console.log("Function scope i is: ", i);
    return i;
    }
}

// ================ 2
const s = [5, 7, 2];
function editInPlace() {
  let i1 = s[0];
  let i2 = s[1];
  let i3 = s[2];
  s[0] = i3;
  s[1] = i1;
  s[2] = i2;
}
editInPlace();

// ================ 3
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// ================ 4
const magic = () => {
  return new Date();
};

// ================ 5
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
console.log(myConcat([1, 2], [3, 4, 5]));

// ================ 6
const increment = (number, value = 1) => number + value;

// ================ 7
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// ================ 8
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1]; 
console.log(arr2);

// ================ 9
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
// const { today, tomorrow} = HIGH_TEMPERATURES;

// ================ 10
// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };
// const { today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES;

// ================ 11
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
}; 
const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

// ================ 12
let a = 8, b = 6;
[a,b] = [b,a];

// ================ 13
function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list;
  return shorterList;
}
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

// ================ 14
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({max, min}) => ((max + min) / 2.0);

// ================ 15
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = result.failure.map(element => `<li class="text-warning">${element}</li>`);
  // Only change code above this line
  return failureItems;
}
const failuresList = makeList(result.failure);

// ================ 16
const createPerson = (name, age, gender) => {
  return {name, age, gender};
}

// ================ 17
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
}
bicycle.setGear(3);
console.log(bicycle.gear);

// ================ 18
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);

// ================ 19
class Thermostat {
  constructor(fahrenheit) {
    this._tempInCelsius = 5/9 * (fahrenheit - 32);
  }
  get temperature() {
    return this._tempInCelsius;
  }
  set temperature(newTemp) {
    this._tempInCelsius = newTemp;
  }
}
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

// ================ 20
<html>
  <body>
    <script type="module" src="index.js"></script>
  </body>
</html>

// ================ 21
const uppercaseString = (string) => {
  return string.toUpperCase();
}
const lowercaseString = (string) => {
  return string.toLowerCase()
}
export { uppercaseString, lowercaseString };

// ================ 22
import { uppercaseString, lowercaseString } from './string_functions.js';
uppercaseString("hello");
lowercaseString("WORLD!");

// ================ 23
import * as stringFunctions from "./string_functions.js";
stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// ================ 24
export default function subtract(x, y) {
  return x - y;
}

// ================ 25
import subtract from "./math_functions.js";
subtract(7,4);

// ================ 26
const makeServerRequest = new Promise((resolve, reject) => {
  let responseFromServer;
  if(responseFromServer) {
     resolve("We got the data");
  } else {  
     reject("Data not received");
  }
})

// ================ 27
// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer = true;
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// })

// ================ 28
// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer = true;
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });
// makeServerRequest.then(result => {
//   console.log(result);
// });

// ================ 29
// const makeServerRequest = new Promise((resolve, reject) => {
//   let responseFromServer = false;
//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {  
//     reject("Data not received");
//   }
// });
// makeServerRequest.then(result => {
//   console.log(result);
// });
// makeServerRequest.catch(error => {
//   console.log(error);
// });

// ================ Regular Expressions ================
// ================ 1
// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);

// ================ 2
// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/;
// let result = waldoRegex.test(waldoIsHiding);

// ================ 3
// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/;
// let result = petRegex.test(petString);

// ================ 4
// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; // Change this line
// let result = fccRegex.test(myString);

// ================ 5
// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line

// ================ 6
// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/gi;
// let result = twinkleStar.match(starRegex);

// ================ 7
// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);

// ================ 8
// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi;
// let result = quoteSample.match(vowelRegex);

// ================ 9
// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/gi;
// let result = quoteSample.match(alphabetRegex);

// ================ 10
// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig;
// let result = quoteSample.match(myRegex);

// ================ 11
// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi;
// let result = quoteSample.match(myRegex);

// ================ 12
// let difficultSpelling = "Mississippi";
// let myRegex = /s+/gi;
// let result = difficultSpelling.match(myRegex);

// ================ 13
// let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
// let chewieRegex = /Aa*/;
// let result = chewieQuote.match(chewieRegex);

// ================ 14
// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/;
// let result = text.match(myRegex);

// ================ 15
let reCriminals = /C+/;

// ================ 16
// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);

// ================ 17
// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/; // Change this line
// let result = lastRegex.test(caboose);

// ================ 18
// let quoteSample = "The five boxing wizards jump quickly.";
// let alphabetRegexV2 = /\w/g;
// let result = quoteSample.match(alphabetRegexV2).length;

// ================ 19
// let quoteSample = "The five boxing wizards jump quickly.";
// let nonAlphabetRegex = /\W/g;
// let result = quoteSample.match(nonAlphabetRegex).length;

// ================ 20
// let movieName = "2001: A Space Odyssey";
// let numRegex = /\d/g;
// let result = movieName.match(numRegex).length;

// ================ 21
// let movieName = "2001: A Space Odyssey";
// let noNumRegex = /\D/g;
// let result = movieName.match(noNumRegex).length;

// ================ 22
// let username = "JackOfAllTrades";
// let userCheck = /^[a-z]([a-z]+\d*|\d{2,})$/i;
// let result = userCheck.test(username);

// ================ 23
// let sample = "Whitespace is important in separating words";
// let countWhiteSpace = /\s/g;
// let result = sample.match(countWhiteSpace);

// ================ 24
// let sample = "Whitespace is important in separating words";
// let countNonWhiteSpace = /\S/g;
// let result = sample.match(countNonWhiteSpace);

// ================ 25
// let ohStr = "Ohhh no";
// let ohRegex = /Oh{3,6} no/;
// let result = ohRegex.test(ohStr);

// ================ 26
// let haStr = "Hazzzzah";
// let haRegex = /Haz{4,}ah/g;
// let result = haRegex.test(haStr);

// ================ 27
// let timStr = "Timmmmber";
// let timRegex = /Tim{4}ber/g;
// let result = timRegex.test(timStr);

// ================ 28 
// let favWord = "favorite";
// let favRegex = /favou?rite/; // Change this line
// let result = favRegex.test(favWord);

// ================ 29
// let sampleWord = "astronaut";
// let pwRegex = /(?=\w{6,})(?=\D+\d\d)/; 
// let result = pwRegex.test(sampleWord);

// ================ 30
// let myString = "Eleanor Roosevelt";
// let myRegex = /(Franklin |Eleanor ).*Roosevelt/;
// let result = myRegex.test(myString);

// ================ 31
// let repeatNum = "42 42 42";
// let reRegex = /^(\d+) \1 \1$/;
// let result = repeatNum.match(reRegex);

// ================ 32
// let str = "one two three";
// let fixRegex = /(\w+) (\w+) (\w+)/g;
// let replaceText = "$3 $2 $1";
// let result = str.replace(fixRegex, replaceText);

// ================ 33
// let hello = "   Hello, World!  ";
// let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
// let result = hello.replace(wsRegex, '$2');

// ================ Debugging ================
// ================ 1
let a = 5;
let b = 1;
a++;
let sumAB = a + b;
console.log(a);

// ================ 2
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
console.log(output);
console.clear();

// ================ 3
let seven = 7;
let three = "3";
console.log(seven + three);
console.log(typeof seven);
console.log(typeof three);

// ================ 4
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

// ================ 5
// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) =>  previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

// ================ 6
let innerHtml = "<p>Click here to <a href='#Home'>return home</a></p>";
console.log(innerHtml);

// ================ 7
// let x = 7;
// let y = 9;
// let result = "to come";
// if (x == y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }
// console.log(result);

// ================ 8
// function getNine() {
//   let x = 6;
//   let y = 3;
//   return x + y;
// }
// let result = getNine();
// console.log(result);

// ================ 9
function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);

// ================ 10
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}
countToFive();

// ================ 11
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

// ================ 12
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}

// ================ Basic Data Structures ================
// ================ 1
let yourArray;
yourArray = [
  {name: "Sasa", age: 51, man: true},
  {name: "Nata", age: 54, man: false},
  {name: "Tom", age: 27, man: true},
  {name: "John", age: 19, man: true},
  {name: "Madonna", age: 51, man: false},
  "string",
  123,
  true
]

// ================ 2
// let myArray = ["a", "b", "c", "d"];
// myArray[1] = "z";
// console.log(myArray);

// ================ 3
function mixedNumbers(arr) {
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9);
  return arr;
}
console.log(mixedNumbers(['IV', 5, 'six']));

// ================ 4
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}
console.log(popShift(['challenge', 'is', 'not', 'complete']));

// ================ 5
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(0, 1);
arr.splice(3, 4);
console.log(arr);

// ================ 6
function htmlColorNames(arr) {
  arr.splice(0,2, 'DarkSalmon', 'BlanchedAlmond');
  return arr;
}
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));

// ================ 7
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));

// ================ 8
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));

// ================ 9
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];
  return sentence;
}
console.log(spreadOut());

// ================ 10
function quickCheck(arr, elem) {
  return arr.indexOf(elem) != -1;
}
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));