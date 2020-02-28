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
  {quote: "You may encounter many defeats, but you must not be defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.", 
   source: "Maya Angelou", 
   citation: "Interview with psychology today", 
   year: 2009
  },
  {quote: "Even if we don't have the power to choose where we come from, we can still choose where we go from there." ,
   source: "Stephen Chbosky", 
   citation: "Perks of being a wallflower",
   year: 1999
  },
  {quote: "To finish the moment, to find the journey’s end in every step of the road, to live the greatest number of good hours, is wisdom.", 
   source: "Ralph Waldo Emerson",
   citation: "Essays and Lectures",
   year: 1848
  },
  {quote: "Great works are performed not by strength but by perseverance.",
   source: "Samuel Johnson",
   citation: "Rasselas",
   year: 1759,
   tag: "motivational"
  },
  {quote: "To thine own self be true.",
   source: "William Shakespeare",
   citation: "Hamlet", 
   year: 1603,
   tag: "literature"
  },
];

//create an array of colors to use for the background
let colors = ['red', 'blue', 'cyan', 'pink', 'purple', 'yellow', 'green', 'brown']; 

/***
 * `getRandomQuote` function
 * Runs a random number generator first to select an item in the array
 * The random number generator is based on the random number generators taught in various treehouse lessons.
***/
let randomQuote;
function getRandomQuote() {
randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
return randomQuote;
}

//function to get a random background color
//runs a random number generator to select a color from the colors array, then applies it to the website
//I used this stackoverflow page to get the basic idea and the document.body.style.background-part of my code: 
//https://stackoverflow.com/questions/21919478/how-to-change-the-background-color-using-javascript
function randomBackground() {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = randomColor;
}

/***
 * `printQuote` function
 * 
***/
function printQuote() {
  
  // calling the getRandomQuote function
  let quoteToUse = getRandomQuote();
  //starting the HTML string for the quote and source used, those will always appear, storing it in a new message variable
 let message = `<p class="quote">${quoteToUse.quote}</p>
 <p class="source">${quoteToUse.source}`;

  //test to see if a citation is present, if so, add the citation to the message
  if (quoteToUse.citation !== undefined){
    message += `<span class="citation"> ${quoteToUse.citation}</span>`;
  }
 //test to see if a year is present, if so, add the year to the message
if (quoteToUse.year !== undefined){
  message += `<span class=year>${quoteToUse.year}</span>`;
}
//adds tags where they exist in the same style of the year property
if (quoteToUse.tag !== undefined){
  message += `<span class=year>${quoteToUse.tag}</span>`
}
 //close the HTML string
  message += `</p>`

  //set the innerHTML for the string, followed the project walkthrough guide for my printeQuote function. 
  let printToPage = document.getElementById('quote-box');
  printToPage.innerHTML = message; 

  //call the randomBackground function
  randomBackground();
}


//a new quote will print every 5 seconds, I got the basic code for this from stackoverflow: https://stackoverflow.com/questions/2133166/loop-timer-in-javascript
setInterval(printQuote, 5000)

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);