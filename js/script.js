// This the main js script that run on the web page.

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// it gets random quote from the array of objects, and assigns it to a variable.
function getRandomQuote() {
	var randomquotes = Math.floor(Math.random() * quotes.length);
	return quotes[randomquotes];
}

// It prints out the quote to the webpage .
function printQuote() {
	var quoteRotator = getRandomQuote(); // Assigning the a new variable to the getRandomQuote function.
	var quoteDisplayer = ""; // This variable is the diplayer of the quotes.
  // The quote are being gotten by their properties and assign to a variable.
	quoteDisplayer +=	'<p class="quote">' + quoteRotator.quote + '</p>';
	quoteDisplayer += '<p class="source">' + quoteRotator.source;
  // This displays the citation, year, tags if they are available using the if conditional stat
  if(quoteRotator.citation !== undefined) {
		quoteDisplayer += '<span class="citation">' + quoteRotator.citation + '</span>';
  }
  if(quoteRotator.year !== undefined) {
		quoteDisplayer += '<span class="year">' + quoteRotator.year + '</span>';
	}
  if(quoteRotator.tags !== undefined) {
		quoteDisplayer += '<p class="tags">' + quoteRotator.tags + '</p>';
	}
  document.getElementById('quote-box').innerHTML = quoteDisplayer;
}

// Thisis the web page quote changer, and background changer.
// It changes them when the user have not clicked any part of the web page for 20 seconds.

setInterval(printQuote, 20000);
