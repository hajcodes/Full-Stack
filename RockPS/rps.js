var userScore = 0
var compScore = 0

function play(playerChoice){
    var choices = ['rock','paper','scissors']
    var computerChoice = choices[Math.floor(Math.random()*3)]
    var result = ""

    if (computerChoice == playerChoice){
        result = "Draw"
    }

    else if(
        (playerChoice == 'rock' && computerChoice == 'scissors') ||
        (playerChoice == 'scissors' && computerChoice == 'paper') ||
        (playerChoice == 'paper' && computerChoice =='rock')
    ){
        result = 'You win!'
        userScore ++;
    }
    else{
        result = 'Computer Wins!'
        compScore ++;
    }
    console.log(userScore, compScore)
    document.getElementById('result').innerHTML = "Computer chose " + computerChoice  + "<br>" + result
    document.getElementById('userScore').innerText = userScore
    document.getElementById('compScore').innerText = compScore
    
    
}