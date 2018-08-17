// Your code goes here
function triangle() {
    let a = parseFloat(prompt("Please input a side", "10"));    
    let b = parseFloat(prompt("Please input b side ", "20"));
    let alpha = prompt("Please input angle alpha ", "30");
    let c = 0; 
    let S = 0;
    let P = 0;
    let radians = alpha * (Math.PI/180);
    let cosa = Math.cos(radians);
    let sina = Math.sin(radians);

    if(a > 0 || b > 0 || alpha > 0){
        c = (Math.sqrt(a*a + b*b - 2*a*b*cosa)).toFixed(2);
        S = (a*b*sina/2).toFixed(2);
        P = a + b + parseFloat(c);
        console.log("c length: " + c + "\n" +
                    "Triangle square: : " + S + "\n" +        
                    "Triangle perimeter: " + P);
    } else{
        console.log("Invalid datda");
    }
}