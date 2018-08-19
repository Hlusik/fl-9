// Your code goes here
function playGame(){
    let totalPrize = 0;
    let n = 5;
    let prizeArray = [10, 5, 2];
    
    if(!window.confirm("Do you want to play a game?")){
        alert("You did not become a millionaire, but can.");
    } else{
        let continueGame = 1;
        while(continueGame){        
            console.log(prizeArray, totalPrize, n);
            let game = oneGame(prizeArray, totalPrize, n);    
            continueGame = game[0];      
            totalPrize = game[1];
            n = n*2;
            for ( let i in prizeArray) {
                prizeArray[i] = prizeArray[i] * 3;
            }
            console.log(continueGame, prizeArray, totalPrize, n);
        }
    }
}

function oneGame(prizeArray, totalPrize, n){
    let i = 0;
    let possiblePrize;
    let userNumber;
    let randomNumber = Math.floor(Math.random() * (n +1));
    console.log(randomNumber);
    while(i < 3){
        possiblePrize = prizeArray[i] + totalPrize;
        if(prompt("Please enter your number from 0 to " + n +
                            "\n Attempts left: " + i + 
                            "\n Total prize: " + totalPrize +
                            "\n Possible prize on current attempt:" + possiblePrize, "2")){
            userNumber = prompt("Please enter your number from 0 to " + n +
                                "\n Attempts left: " + i + 
                                "\n Total prize: " + totalPrize +
                                "\n Possible prize on current attempt:" + possiblePrize, "2");   
        }  else {
            return [0, totalPrize];
        }
        if(randomNumber == userNumber){
            if(confirm("Congratulation! Your prize is: " + possiblePrize + "$! \n Do you want to continue?")){
                return [1, possiblePrize];
            } else {
                return [0, possiblePrize];
            }
        }      
        ++i;
    }
    if(confirm("Thank you for a game. \n Do you want to play again?")){
        return [1, 0];
    } else return [0, 0];
}