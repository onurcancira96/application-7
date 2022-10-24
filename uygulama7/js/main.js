var quotes=[];
var colors=['#EA047E','#FF6D28','#FCE700','#00F5FF','#FF1E1E','#F9F9F9','#FF577F','#277BC0','#CFE8A9'];

function GetQuotes(){
    return fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data=>{
        quotes=data;
        Change();
    })
}

function Change(){
    var count=quotes.length
    var rndNumb=Math.floor(Math.random()*count);

    document.getElementById('text').innerHTML=quotes[rndNumb].text;
    document.getElementById('author').innerText='-'+quotes[rndNumb].author;
    var rndColorNumb=Math.floor(Math.random()*9);
    document.body.style.backgroundColor=colors[rndColorNumb];
}

function ShareTweet(){
    var text=document.getElementById('text').innerText;
    window.location.href='https://twitter.com/intent/tweet?hastags=nickname'
}
GetQuotes();