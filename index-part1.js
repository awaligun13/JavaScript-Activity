//Create variables of different data types and print them.
let score = 100;
let temperature = 36.6;
let greeting = "Hello, JavaScript!";
let isLearningFun = true;

console.log(score, temperature, greeting, isLearningFun);

//Create an object and an array, then access and modify their elements.
const student = {
    name: "Ava Waligun",
    age: 20,
    subjects: ["Math", "Computer Science", "English"],
};
student.isGraduated = false;

const primeNumbers = [2, 3, 5, 7, 11]
primeNumbers[1] = 4;

console.log(primeNumbers[1], "Mistake Detected");

primeNumbers[1] = 3;
console.log(primeNumbers);

//Perform operations using different operators and understand their results.
let a = 2;
let b = 5;
let sum = a+b;
let product = a*b;
let mod = a%b;
console.log(sum, product, mod);

let x = 5;
let y = 8;

if (x > y){
    console.log(x)
}
else{
    console.log(y);
}

if (x == y){
    console.log("Equal");
}
if (x != y){
    console.log("Not Equal");
}

let t = true;
let f = false;

if (t && f){
    console.log(true);
}
else{
    console.log(false);

}

if (t || f){
    console.log(true);
}

//Write conditional statements and loops using control flow operators
if (score > 50){
    console.log("Great job!");
}
else{
    console.log("Keep Trying!");

}

for (let i = 0; i < primeNumbers.length; i++){
    console.log(primeNumbers[i]);
}


while (score > 0){
    score = score - 1;
}
console.log(score);


//Copy the function below into your code, understand it, and see the output.
//Write out a couple of sentences on how it works.
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
//it takes an event date, uses the current date to figure out how much time seperate them in miliseconds
//then, it converts the miliseconds into seconds, uses seconds to find minutes, and then hours, and then days
// then it uses modulo to get leftover hours, minutes, and seconds.

function swap(a, b, c){
    let hold = a;
    a = b;
    b = c;
    c = hold;
}

function findLongestWord(sentence) {
const words = sentence.split(' ');

    let word_length = 0;
    let longest = "";

    for (let i = 0; i < words.length; i++){
        if (words[i].length > word_length){
            word_length = words[i].length;
            longest = words[i];
        }
    }
    return longest
}
// Example usage:
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// your function should output the correct longest word.
