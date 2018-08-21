// Your code goes here
function login(){
    let userName = prompt('Please enter your User', 'User');
    let password;
    let currentHours;
    if(!userName){
        alert('Canceled')
        return;
    }
    if(userName.length < 4){
        alert('I don\'t know any users having name length less than 4 symbols');
        return;
    }
    if(userName === 'User'){
        password = prompt('Please enter your password', 'SuperUser');
        if(!password){
            alert('Canceled');
            return;
        }
        if(password === 'SuperUser'){
            currentHours = new Date().getHours();
            console.log(currentHours);
            if(currentHours < 20){
                alert('Good day!')
            } else{
                alert('Good evening!');
            }
        } else{
            alert('Wrong password');
        }
    } else{
        alert('I don’t know you');
    }    
}
login();