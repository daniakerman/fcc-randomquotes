$( document ).ready(function() {
  // Handler for .ready() called.

var quotes = ["Stay on target. &mdash; Gold Five",
    "Your eyes can deceive you. Don&#39;t trust them. &mdash; Obi-Wan Kenobi",
    "I find your lack of faith disturbing. &mdash; Darth Vader",
    "Do. Or do not. There is no try. &mdash; Yoda",
    "Your focus determines your reality. &mdash; Qui-Gon Jinn",
    "It&#39;s not my fault. &mdash; Han Solo",
    "It&#39;s not my fault. &mdash; Han Solo",
    "It&#39;s not my fault. &mdash; Han Solo",
    "It&#39;s not my fault. &mdash; Han Solo",
    "It&#39;s not my fault. &mdash; Han Solo"]


// Assigned/bind click event to the handler/callback
$("#quoteButton").click(function () {

    // Generated random number from 0 - 10
    var randomKey = Math.floor(Math.random() * 10);

    // getting single quote by generated key
    var singleQuote = quotes[randomKey];

    // put single quote in placeholder
    $('#randomQuote').html(singleQuote);
    
    // Tweet out a quote
    $('.twitter-share-button').attr("href", 'https://twitter.com/intent/tweet?text=' + singleQuote);

    // Show tweet
    $('.twitter-share-button').show();
});
    
});
