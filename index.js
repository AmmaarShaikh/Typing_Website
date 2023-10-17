const testWords = 'argument dressing vote violation call see bird alligator water bottle fan wind speed travel place plane tower lights sea ocean leaves country around jacket sweater dream images door tissue paper buffalo navy blue red yellow green purple white board chalk draw line square rectangle triangle laptop keys press website internet learning professor socks pants'.split(' ');

function newGame(){
    document.getElementById("words").innerHTML = "";
    
    x = 0
    while(x < 150){
        document.getElementById("words").innerHTML += testWords[Math.ceil(Math.random() * testWords.length)];
        x++;
    } 
}

newGame();
