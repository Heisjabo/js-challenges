const sumArray = require("./sumArray.js");
const capitalizeWords = require("./capitalized.js");
const findFirstUniqueNumber = require("./firstUnique.js");
const vowelCount = require("./vowelCount.js");

const mySentence = "how Can mirrors be real if Eyes aren't Real?";

console.log(sumArray([1, 2, 3], [2, 3]));
console.log(capitalizeWords(mySentence));
const sequence1 = [3, 9, 19, 9, 34, 1, 3];
console.log(findFirstUniqueNumber(sequence1)); // Output: 19
console.log(vowelCount("jabo"));
