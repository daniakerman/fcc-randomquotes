$(document).ready(function () {
    // Handler for .ready() called.

    var quotes = ["Your car is your story, so don`t let someone else write the book - Robert Moog",
        "I happen to think that computers are the most important thing to happen to musicians since the cat-gut which was a long time ago - Robert Moog",
        "Everything has some consciousness, and we tap into that. It is about energy at it`s most basic level - Robert Moog", "The more you get into material and matter, all you realize is in matter, there is energy. There is a blur between energy and consciousness. All material is conscious to some extent or another. All material can respond to some extent or another to vibrations of energy that is different to energy you learn about in physics - Robert Moog", "There are all sorts of reliable information now on people and animal being able to be able to effect the operations of machines—even of computers—and I think that has great implications for what goes on between a musician and his instrument - Robert Moog", "When a pianist sits down and does a virtuoso performance he is in a technical sense transmitting more information to a machine than any other human activity involving machinery allows - Robert Moog", "I was never worried that synthesizers would replace musicians. First of all, you have to be a musician in order to make music with a synthesizer - Robert Moog", "If you've got a stick hitting a drum and you're programming it on a computer, it's more interesting than a sample playing back - it's something in the air, that's the magical ingredient - Aphex Twin", "I wanted to do gigs where you've just got mirrors on the stage, and then you light the crowd so they look at the stage and all they can see is themselves. It's just like.. there you go, it's you, you cunts - Aphex Twin", "The best artists are people who don't consider themselves artists, and the people who do are usually the most pretentious and annoying. They've got their priorities wrong. They're just doing it to be artists rather than because they want to do it - Aphex Twin", "It's not about what equipment you have, it's what you do with it - Aphex Twin", "I actually prefer it if I don't know what I'm supposed to do. If you've got an equal temperament piano keyboard, then you know what you're going to get if you play certain chords. But I actually like it if you don't know where the notes are, because then you do it intuitively. You're working out a new language, basically. New rules  - Aphex Twin"]


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
        
        //play sound
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'ding.mp3');
        audioElement.play();
        
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
