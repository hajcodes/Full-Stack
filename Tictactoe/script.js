var currentPlayer = 'X'
var turnsTaken = 0
var gameOver = false

function play(cell){
    if (gameOver){
    return
}
    if (cell.innerText !== ""){
        return;
    }
    cell.innerText = currentPlayer
    turnsTaken ++;
    console.log(turnsTaken)

    var status = document.getElementById('status')


    if (checkWinner()){
        status.innerHTML = currentPlayer + " Won"
        gameOver = true
        return;
    }

    
    if (turnsTaken == 9){
        var status = document.getElementById('status')
        status.innerHTML = 'Game DRAW'
        return
    }
    if (currentPlayer == "X"){
        currentPlayer = "O"
    }
    else if(currentPlayer == "O"){
        currentPlayer = "X"
    }    

    status.innerHTML = 'Player ' + currentPlayer + " turn"
    
}

function checkWinner(){
    var cells = document.getElementsByClassName('cell')
    wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


    for (var i of wins){
       var a = cells[i[0]].innerText
       var b = cells[i[1]].innerText
       var c = cells[i[2]].innerText
       if (a==b && b == c && a!="")
        return true
    }

   



    // if  (c1 == c2 && c2 == c3 && c1 != ""){
    //     return true
    // }
}
// var c1 = cells[0].innertext
// var c2 = cells[1].innertext
// var c3 = cells[2].innertext
// var c4 = cells[3].innertext
// var c5 = cells[4].innertext
// var c6 = cells[5].innertext
// var c7 = cells[6].innertext
// var c8 = cells[7].innertext
// var c9 = cells[8].innertext 

// if (c1 == c2 && c2 == c3 && c1 != "") {
//     return true 
// }
// }