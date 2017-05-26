$(document).ready(function () {
    // Handler for .ready() called.

    var quotes = ["Stay on target. - Gold Five",
        "Your eyes can deceive you. Don't trust them. - Obi-Wan Kenobi",
        "I find your lack of faith disturbing. - Darth Vader",
        "Do. Or do not. There is no try. - Yoda",
        "Your focus determines your reality. - Qui-Gon Jinn",
        "It's not my fault. - Han Solo",
        "It's not my fault. - Han Solo",
        "It's not my fault. - Han Solo",
        "It's not my fault. - Han Solo",
        "It's not my fault. - Han Solo"]


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

    // Animation Effect on hover
    $(".twitter-share-button").hover(
        function () {
            $(this).animate({top: "-15"});
        },
        function () {
            $(this).animate({top: "0"});
        }
    );

// ready
});
