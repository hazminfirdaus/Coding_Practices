let sentence = "The quick brown fox jumps over the lazy dog.";
let position = sentence.indexOf("fox");
console.log("The position of 'fox' in the sentence is: " + position);

let notFoundPosition = sentence.indexOf("cat");
console.log("The position of 'cat' in the sentence is: " + notFoundPosition); // Outputs -1 since "cat" is not found

let caseSensitivePosition = sentence.indexOf("Fox");
console.log("The position of 'Fox' in the sentence is: " + caseSensitivePosition); // Outputs -1 since "Fox" is not found due to case sensitivity

let fromIndexPosition = sentence.indexOf("the", 10);
console.log("The position of 'the' in the sentence starting from index 10 is: " + fromIndexPosition); // Finds the second "the"

// Edge case: Searching for an empty string
let emptyStringPosition = sentence.indexOf("");
console.log("The position of an empty string in the sentence is: " + emptyStringPosition); // Outputs 0

// Edge case: Searching for a substring that is at the very end
let endPosition = sentence.indexOf("dog.");
console.log("The position of 'dog.' in the sentence is: " + endPosition); // Outputs the starting index of "dog."

// Edge case: Searching for a substring that is not present
let absentPosition = sentence.indexOf("elephant");
console.log("The position of 'elephant' in the sentence is: " + absentPosition); // Outputs -1 since "elephant" is not found

// Edge case: Searching with a negative fromIndex
let negativeFromIndexPosition = sentence.indexOf("the", -5);
console.log("The position of 'the' in the sentence starting from index -5 is: " + negativeFromIndexPosition); // Outputs 31, as negative index is treated as 0

// Edge case: Searching with a fromIndex greater than the string length
let outOfBoundsFromIndexPosition = sentence.indexOf("the", 100);
console.log("The position of 'the' in the sentence starting from index 100 is: " + outOfBoundsFromIndexPosition); // Outputs -1 since starting index is out of bounds

// Edge case: Searching for a substring that appears multiple times
let multipleOccurrencesPosition = sentence.indexOf("the");
console.log("The position of the first occurrence of 'the' in the sentence is: " + multipleOccurrencesPosition); // Outputs 31, the index of the first "the"

// Edge case: Searching for a substring that is the entire string
let entireStringPosition = sentence.indexOf(sentence);
console.log("The position of the entire string in itself is: " + entireStringPosition); // Outputs 0

// Edge case: Searching for a substring that is longer than the string
let longerSubstringPosition = sentence.indexOf(sentence + " extra");
console.log("The position of a longer substring than the string is: " + longerSubstringPosition); // Outputs -1 since the substring is longer than the string