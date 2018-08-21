// Your code goes here
let n = 5;
let arrX = 10;
let arrY = 5;
let arrZ = 5;
let continueIndex = 0;
let prizeIndex = 1;
let tryMultiplicator = 3;
let prizeArray = [arrX, arrY, arrZ];
function playGame(){
    let totalPrize = 0; 
    let continueGame = true; 
    if(!window.confirm('Do you want to play a game?')){
        alert('You did not become a millionaire, but can.');
    } else{
        while(continueGame){        
            console.log(prizeArray, totalPrize, n);
            let game = oneGame(prizeArray, totalPrize, n);    
            continueGame = game[continueIndex];      
            totalPrize = game[prizeIndex];
            n = n * 2;
            for(let i in prizeArray) {
                if (Object.prototype.hasOwnProperty.call(prizeArray, i)) {
                    prizeArray[i] = prizeArray[i] * tryMultiplicator;
                }
            }
            console.log(continueGame, prizeArray, totalPrize, n);
        }
    }
}

function oneGame(prizeArray, totalPrize, n){
    let i = 0;
    let possiblePrize;
    let userNumber;
    let randomNumber = Math.floor(Math.random() * n);
    let tryCount = 3;
    console.log(randomNumber);
    while(i < tryCount){
        possiblePrize = prizeArray[i] + totalPrize;
        if(prompt('Please enter your number from 0 to ' + n +
                            '\n Attempts left: ' + i + 
                            '\n Total prize: ' + totalPrize +
                            '\n Possible prize on current attempt:' + possiblePrize, '2')){
            userNumber = prompt('Please enter your number from 0 to ' + n +
                                '\n Attempts left: ' + i + 
                                '\n Total prize: ' + totalPrize +
                                '\n Possible prize on current attempt:' + possiblePrize, '2');   
        } else {
            return [false, totalPrize];
        }
        if(randomNumber === userNumber){
            if(confirm('Congratulation! Your prize is: ' + possiblePrize + '$! \n Do you want to continue?')){
                return [true, possiblePrize];
            } else {
                return [false, possiblePrize];
            }
        }      
        ++i;
    }
    if(confirm('Thank you for a game. \n Do you want to play again?')){
        return [true, 0];
    } else {
        return [false, 0];
    }
}
playGame();