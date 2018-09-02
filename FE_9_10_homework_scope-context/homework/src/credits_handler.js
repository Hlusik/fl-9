/* Your code goes here */
function userCard(index){
    let balance = 100; 
    let transactionLimit = 100;    
    let	historyLogs = [];
    let	key = index;
    function getCardOptions(){       
        return {key:key, balance:balance, transactionLimit:transactionLimit, historyLogs:historyLogs};
    }
    function putCredits(amount){
        balance = balance + amount;
        historyLogs.push('{operationType: "Received credits", credits: ' + 
                            amount + ', operationTime: "' + Date.now() + '"}');
    }
    function takeCredits(amount){
        balance = balance - amount;
        historyLogs.push('{operationType: "Withdrawal of credits", credits: ' + 
                            amount + ', operationTime: "' + Date.now() + '"}');
    }
    function setTransactionLimit(amount){
        transactionLimit = amount;
        historyLogs.push('{operationType: "Transaction limit change", credits: ' + 
                            amount + ', operationTime: "' + Date.now() + '"}');
    }
    function transferCredits(amount, card){
        let tax = 0.05;
        let newAmount = amount*(1+tax);
        if(balance < newAmount || transactionLimit < newAmount){
            historyLogs.push('{operationType: "Error", credits: ' + 
                                newAmount + ', operationTime: "' + Date.now() + '"}');
        }
        takeCredits(newAmount);
        card.putCredits(amount);
    }
    return {
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits
    }
}

class UserAccount {    
    constructor(name) {
        this.name = name;
        this.cards = new Array();
        this.cardsCount = 3;
    }

    addCard() {
        if(this.cards.length < this.cardsCount){
            let card = userCard(this.cards.length + 1);
            this.cards.push(card);
        }
    }
    getCardByKey(key){
        let zero = 0;
        if(key > zero && key <= this.cardsCount && key <= this.cards.length){
            let one = 1;
            return this.cards[key - one];
        }
    }
}

let userName = 'Bob';
let user = new UserAccount(userName);
user.addCard()
user.addCard()
let key1 = 1;
let key2 = 2;
let card1 = user.getCardByKey(key1);
let card2 = user.getCardByKey(key2);

let credits = 500;
card1.putCredits(credits);
let transactionLimit = 800;
card1.setTransactionLimit(transactionLimit);
let transferCredits = 300;
card1.transferCredits(transferCredits, card2);

let credits2 = 50;
card2.takeCredits(credits2);

console.log(card1.getCardOptions()); // see Figure 2
console.log(card2.getCardOptions()); // see Figure 3
