// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
let userName = "Refat Alam";

// and the greeting we want to render on the page
let greeting = "Hey, Welocme Back ";
// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + userName;

// Add an emoji to the end! 👋
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1
welcomeEl.innerText += " 👋";

console.log(past(25, 1, 1));
