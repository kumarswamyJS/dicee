var one = Math.floor(Math.random()*6+1);
var two = Math.floor(Math.random()*6+1);
if(one<=6){
    if(one==two){
       alert('Draw');
    }
    else if (one==1){
        document.getElementById('player1').setAttribute('src', './dice1.png');
    }
    else if (one==2){
        document.getElementById('player1').setAttribute('src', './dice2.png');
    }
    else if (one==3){
        document.getElementById('player1').setAttribute('src', './dice3.png');
    }
    else if (one==4){
        document.getElementById('player1').setAttribute('src', './dice4.png');
    }
    else if (one==5){
        document.getElementById('player1').setAttribute('src', './dice5.png');
    }
    else if (one==6){
        document.getElementById('player1').setAttribute('src', './dice6.png');
    }
}
if(two<=6){
    if (two==1){
        document.getElementById('player2').setAttribute('src', './dice1.png');
    }
    else if (two==2){
        document.getElementById('player2').setAttribute('src', './dice2.png');
    }
    else if (two==3){
        document.getElementById('player2').setAttribute('src', './dice3.png');
    }
    else if (two==4){
        document.getElementById('player2').setAttribute('src', './dice4.png');
    }
    else if (two==5){
        document.getElementById('player2').setAttribute('src', './dice5.png');
    }
    else if (two==6){
        document.getElementById('player2').setAttribute('src', './dice6.png');
    }
    
}

if (two > one){
    document.querySelector('#sec p').textContent = 'player 2 won the round.....🥳';
    document.querySelector('.bottom p').textContent = 'Player 1 better luck next time... Try another round';
}



