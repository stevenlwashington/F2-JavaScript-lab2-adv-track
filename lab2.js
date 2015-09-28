'use strict';

// LAB 2: SORTING AND CAMPY SCI-FI

// Welcome to Lab 2 =)

// Be sure to read all the comments!

// All of the instructions are inline with the assignment below.
// Look for the word TODO in comments.  Each TODO will have a
// description of what is required.

// To run this file (in the terminal) use: node lab2.js

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
function Blob() {}

var blob = new Blob();

function eatDowington() {
  var totalPop = 1000;
  var rate = 1;
  for (var i = 1; i < totalPop; i++) {
    rate = i + 1;
    totalPop = totalPop - rate;
  }
  return i;
}

var hoursSpentInDowington = eatDowington();
console.log(hoursSpentInDowington); // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

// function hoursToOoze(population, peoplePerHour) {
//   // TODO: implement me based on the instructions above.
//   // Be sure to then assign me to the Blob's prototype.
// }
Blob.prototype.hoursToOoze = function hoursToOoze(population, peoplePerHour) {
  for (var i = 1; i < population; i++) {
    peoplePerHour = i + 1;
    population = population - peoplePerHour;
  }
  if (population === 0) {
    return 0;
  } else {
    return i;
  }
};

console.log(blob.hoursToOoze(1000, 1));

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.
assert(blob.hoursToOoze(10, 1) === 4, 'Population equal to 10 w/ rate of 1/hr equals 4 hrs');
assert(blob.hoursToOoze(50, 1) !== 4, 'Population equal to 50 w/ rate of 1/hr does not equal 4 hrs');
assert(blob.hoursToOoze(500, 1) >= 4, 'Population equal to 500 w/ rate of 1/hr is greater than or equal to 4 hrs');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
function SentientBeing(homePlanet, language) {
  this.homePlanet = homePlanet;
  this.language = language;
  this.greeting = hello[this.language];
}

// sb is a SentientBeing object
// function sayHello (sb) {
//     // TODO: say hello prints out (console.log's) hello in the
//     // language of the speaker, but returns it in the language
//     // of the listener (the sb parameter above).
//     // use the 'hello' object at the beginning of this exercise
//     // to do the translating

//     //TODO: put this on the SentientBeing prototype
//   }
SentientBeing.prototype.sayHello = function(sb) {
  console.log(this.greeting);
  return sb.greeting;
};

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
function Klingon() {}
Klingon.prototype = new SentientBeing('Qo\'nos', 'klingon');

function Human() {}
Human.prototype = new SentientBeing('Earth', 'federation standard');

function Romulan() {}
Romulan.prototype = new SentientBeing('Romulus', 'romulan');

assert((new Human()).sayHello(new Klingon()) === 'nuqneH', 'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert((new Human()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Romulan()) === 'Jolan\'tru', 'the Romulan should hear Jolan\'tru');
assert((new Klingon()).sayHello(new Human()) === 'hello', 'the Human should hear hello');
assert((new Romulan()).sayHello(new Human()) === 'hello', 'the Human should hear hello');
assert((new Romulan()).sayHello(new Klingon()) === 'nuqneH', 'the Klingon should hear nuqneH');

//*********************************************************
// PROBLEM 3: Sorting. 20 points.
//
// Implement the following functions. Write at least 2
// assertions for each one (the assertions are how you
// will test your code)
//*********************************************************

function lastLetterSort(stringArray) {
  function byLastLetter(a, b) {
    //TODO: implement me. sort the strings in alphabetical
    // order using their last letter
    // Read this about how the sort function works:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // this byLastLetter function is a "compare function"
    // And check out the "comparing strings" section  here:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
  if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) {
    return 1;
  } else {
    return -1;
  }
}
  return stringArray.sort(byLastLetter);
}

console.log(lastLetterSort(['phone', 'tea', 'pen', 'puppy']));
console.log(lastLetterSort(['shoes', 'shorts', 'shirt', 'hoodie']));

assert(lastLetterSort(['phone', 'tea', 'pen', 'puppy']).value === ['phone', 'tea', 'pen', 'puppy'].value, 'order last letter');
assert(lastLetterSort(['shoes', 'shorts', 'shirt', 'hoodie']).value === ['shoes', 'shorts', 'shirt', 'hoodie'].value, 'order last letter');

function sumArray(numberArray) {
  var sum = 0;
  // TODO: implement me using forEach
  numberArray.forEach(function(number) {
    sum += number;
  });
  return sum;
}

console.log(sumArray([3, 6, 9, 12]));
console.log(sumArray([31, 16, 3, 24]));

assert(sumArray([3, 6, 9, 12]) === 30, 'the sum of this array is 30');
assert(sumArray([31, 16, 3, 24]) === 74, 'the sum of this array is 74');

function sumSort(arrayOfArrays) {
  return arrayOfArrays.sort(function(a, b) {
    // TODO: implement me using sumArray
    //  order the arrays based on the sum of the numbers
    //  inside each array
    if (sumArray(a) > sumArray(b)) {
      return 1;
    } else {
      return -1;
    }
  });
}

console.log(sumSort([[3, 6, 9, 12], [31, 16, 3, 24]]));
console.log(sumSort([[2, 4, 6], [1, 4], [4, 5, 6]]));

assert(sumSort([[3, 6, 9, 12], [31, 16, 3, 24]]).value === [[31, 16, 3, 24], [3, 6, 9, 12]].value, 'sorts arrays based on sum of num inside each array');
assert(sumSort([[2, 4, 6], [1, 4], [4, 5, 6]]).value === [[1, 4], [2, 4, 6], [4, 5, 6]].value, 'sorts arrays based on sum of num inside each array');
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
