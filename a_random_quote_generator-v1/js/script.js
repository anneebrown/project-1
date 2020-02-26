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
   year: 1759
  },
  {quote: "To thine own self be true.",
   source: "William Shakespeare",
   citation: "Hamlet", 
   year: 1603
  },
];


/***
 * `getRandomQuote` function
 * Runs a random number generator first to select an item in the array
***/
function getRandomQuote() {
 let randomNumber = Math.floor(Math.random() * quotes.length);
 return randomNumber;
}


/***
 * `printQuote` function
***/
function printQuote() { 
  print(`<h1>${quotes[randomNumber]}</h1> 
  -quotes[randomNumber][1]`)
  if (quotes[randomNumber][1] !== undefined){
    print(`$quotes[randomNumber][1]`)
  }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);