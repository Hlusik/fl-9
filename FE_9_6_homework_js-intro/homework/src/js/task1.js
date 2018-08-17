// Your code goes here
function totalPriceWithDiscount() {
    let totalPrice = prompt("Please input amount of money ", "4950");    
    let discount = prompt("Please input the discount ", "30");
    if(totalPrice > 0 || discount > 0){
        discountPrice = (totalPrice*discount/100).toFixed(2);
        console.log("Price without discount: " + totalPrice + "\n" +
                    "Discount: " + discount + "%" + "\n" +        
                    "Price with discount: " +(totalPrice - discountPrice) + "\n" +
                    "Saved: " + discountPrice);
    } else{
        console.log("Invalid datda");
    }
}