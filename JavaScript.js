// 1. Create a string that will hold a word value of your choice.
let string = "stringvalue";

// 2. Create a function that can intake a parameter of the string word value.
function scramble(word)
{
 /* You will need to create a separate variable to hold this value as 
    the length of the string will be decreasing as the loop continues. */
  let wordLength = word.length;

 /* 4. Create an empty temporary string variable that you can use 
       to hold the new scrambled word value. */
  let temp = '';

 /* 5. Create a for loop that will iterate the number of letters within
       the string parameter starting at 0 and iterating until the original 
       length value of the string is reached. */
  for (let i = wordLength; i > 0; i--)
  {
   /* 6. Create a variable that will randomly select one letter using 
         its index value, with Math.floor() and Math.random() multiplied by
         the current length of the string. */
    let randomLetter = Math.floor(Math.random() * i);

   /* 7. Add the new letter to the new string and remove it from
         the original string. */
    temp += word[randomLetter];
    word = word.substring(0, randomLetter) + word.substring(randomLetter + 1);
    
   /* 10. As you loop through the content you will see a countdown of
          the remaining letters, the new scrambled version of the word as
          it is built, and the decreasing letters in the original word. */
    console.log(`Remaining letters: ${i - 1}`);
    console.log(`New Scrambled Version: ${temp}`);
    console.log(`Original String: ${word}`);
    console.log(`----------------------------------------`);
  }

 // 11. Return the final result
  return temp;
}

/* invoke the function with the original string word as an argument. 
   Output this to the console. */
console.log("Final Result: ", scramble(string));