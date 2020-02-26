/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  ['You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.', 'Maya Angelou', 'Interview with psychology today', 2009]
  ['Even if we don\'t have the power to choose where we come from, we can still choose where we go from there.', 'Stephen Chbosky', 'Perks of being a wallflower', 1999],
  ['To finish the moment, to find the journey\'s end in every step of the road, to live the greatest number of good hours, is wisdom.', 'Ralph Waldo Emerson',  'Essays and Lectures', 1848],
  ['Great works are performed not by strength but by perseverance.', 'Samuel Johnson', 'Rasselas', 1759],
  ['To thine own self be true.', 'William Shakespeare', 'Hamlet', 1603],
];


/***
 * `getRandomQuote` function
 * Runs a random number generator first to select an item in the array
 * The random number generator is based on the random number generators taught in various treehouse lessons.
***/
let randomNumber;
function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * quotes.length);
 return randomNumber;
}


/***
 * `printQuote` function
 * 
***/
function printQuote() { 
  var quoteOnPage = document.getElementById('quote-box');
  quoteOnPage.innerHTML = `${quotes[randomNumber]}`;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);