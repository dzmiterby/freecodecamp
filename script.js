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
const sum = 10 + 10;

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
function sum(arr, n) {
  if(n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
}

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