
var clickedBtn = document.getElementById('clicked'); 
clickedBtn.onclick = getRandomQuote;

var myQuotes = [
    {
        quote: `“Be yourself; everyone else is already taken.”`,
        author: '--Oscar Wilde'
    },
    {
        quote:  `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        author: '--Albert Einstein'
    },
    {
        quote: `“So many books, so little time.”`, 
        author: '--Frank Zappa'
    },
    {
        quote: `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”`,
        author: '--Dr. Seuss'
    },
    {
        quote: `“Be the change that you wish to see in the world.”`,
        author: '--Mahatma Gandhi'
    },
    {
        quote: `“If you tell the truth, you don't have to remember anything.”`, 
        author: '--Mark Twain'
    },
    {
        quote: `“A friend is someone who knows all about you and still loves you.”`,
        author: '--Elbert Hubbard'
    },
    {
        quote:  `“I am so clever that sometimes I don't understand a single word of what I am saying.”`,
        author: '--Oscar Wilde'
    },
    {
        quote:  `“Life is what happens to us while we are making other plans.”`,
        author: '--Allen Saunders'
    },
    {
        quote:  `“I have not failed. I've just found 10,000 ways that won't work.”`, 
        author: '--Thomas A. Edison'
    },
    {
        quote:  `“The man who does not read has no advantage over the man who cannot read.”`,
        author: '--Mark Twain'
    }


    ];


var counter;
var latestCounter;
function getRandomQuote(){
    counter = Math.round(Math.random()*10); 
    while(counter == latestCounter){
        counter = Math.round(Math.random()*10); 
    }
    document.getElementById('quote').innerHTML = myQuotes[counter].quote;
    document.getElementById('author').innerHTML = myQuotes[counter].author;
    latestCounter = counter;
}
