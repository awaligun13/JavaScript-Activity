Part 1: JavaScript Basics
1. Create index.js file from your Vscode and accomplish the following tasks:
2. When you want to run the code, open your terminal and type “node index.js”
Objective: Create variables of different data types and print them.
● Declare an integer variable named score and initialize it with 100.
● Declare a float variable named temperature and initialize it with 36.6.
● Declare a string variable named greeting and initialize it with "Hello, JavaScript!".
● Declare a boolean variable named isLearningFun and initialize it with true.
● Print all the variables to the console.
Objective: Create an object and an array, then access and modify their elements.
● Create an object named student with properties name (a string), age (an integer), and
subjects (an array of strings).
● Add a new property isGraduated to the student object and set it to false.
● Create an array named primeNumbers and initialize it with the first five prime numbers.
● Change the second element in the primeNumbers array to 4 (which is not prime) and
print the wrong element to the console, followed with “Mistake detected”.
● Correct the mistake by changing the second element back to its original prime number
and print the entire array to the console.
Objective: Perform operations using different operators and understand their results.
● Use arithmetic operators to calculate the sum, product, and modulus of two numbers
and print the results.
● Create two variables x and y, with different values. Use comparison operators to
compare these variables and print the results. Test with different operators.
● Use logical operators to combine two boolean expressions and print the results.
Objective: Write conditional statements and loops using control flow operators.
● Write an if-else statement that checks if the score from Part 1 is greater than 50. If true,
print "Great job!", otherwise print "Keep trying!".
● Write a for loop that iterates over the primeNumbers array and prints each number to the
console.
● Write a while loop that decrements the score from Part 1 until it reaches 0.
Objective: Understand JS functions
● Copy the function below into your code, understand it, and see the output. Write out a
couple of sentences on how it works.
function eventCountdown(eventDate) {
const now = new Date();
const event = new Date(eventDate);
const timeDiff = event - now;
let seconds = Math.floor(timeDiff / 1000);
let minutes = Math.floor(seconds / 60);
let hours = Math.floor(minutes / 60);
let days = Math.floor(hours / 24);
hours %= 24;
minutes %= 60;
seconds %= 60;
return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining
until the event.`;
}
const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
console.log(countdownMessage); // Outputs the time remaining until New Year's Eve 2024
● Write a swap function that will take 3 variables and swap a to b and b to c and c to a.
● Complete the function below:
function findLongestWord(sentence) {
const words = sentence.split(' '); // words is an array of all the words in the sentence
// write your code here
}
// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// your function should output the correct longest word.
PART 2: DOM Manipulation
Creating a “task adder”
1. Create an index.js, index.html, and styles.css file in a new directory
2. Use “!” to create HTML boilerplate in the index.html file
3. Link your index.js and styles.css file to the HTML in the <head> tag
Objective: Use HTML to add elements to a web page
● In the body, create a text input, button, and ordered list
● Next to each ordered list item have an input element of type checkmark
● Make sure to add ids or classnames to make them easily identifiable
Objective: Use JavaScript to select and manipulate DOM elements
● Use JavaScript to add an event listener to the button
● When the button is pressed, add the content of the text input as a new item in the list,
along with a another input of type checkmark, clear the input.
Objective: Use CSS to create a visually appealing and useable webpage
● Use CSS to select your elements and add styles
● Design it as a mini “to do task list” website
I encourage you as well to add any other html, css, or javascript to help you get a better grasp of
the content
