// Get Digits
function getDigits(str) {
    let digits = ""; // to stre the digist
  
    // iterating over each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];

    //   using isNan() to check if the character is not a number
      if (!isNaN(char)) { // !isNaN will allow us to get the numbers  but if we use only isNaN without ! it will get the characters
        digits += char; // appending the digit to the digits string
      }
    }
  
    return Number(digits); // converting the digits string to an integer and return it
  }

  console.log(getDigits("abc8c0d1ngd0j0!8")); 
  console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); 



// Acronyms
function acronym(str) {
    const words = str.split(" "); // to split the string into an array of words
    let acronym = ""; // storing the acronym
  
    for (let i = 0; i < words.length; i++) { //for loop goes through the string
      const word = words[i];
      if (word !== "") {
        acronym += word[0].toUpperCase(); // appending the first character of each word and capitalizing
      }
    }
  
    return acronym;
  }

  console.log(acronym(" there's no free lunch - gotta pay yer way. "));
  console.log(acronym("Live from New York, it's Saturday Night!"));
  

// Count Non-Spaces
function countNonSpaces(str) {
    let count = 0; // giving 0 because the count will start from 0
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") { // if the character is not space we add and count
        count++; //adding by 1
      }
    }
  
    return count;
  }
  
  console.log(countNonSpaces("Honey pie, you are driving me crazy"));
  console.log(countNonSpaces("Hello world !"));


// Remove Shorter Strings
function removeShorterStrings(arr, minLength) {
    const result = []; // creating an empty result array store the filtered strings
  
    for (let i = 0; i < arr.length; i++) { //for loop goes through an array
      if (arr[i].length >= minLength) {  // because the minLength is given we simply add >= to check the length
        result.push(arr[i]); //and if lenght is equal or greater we push to result
      }
    }
  
    return result;
  }
  
  console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
  console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));
