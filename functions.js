function sayMyName(){
    console.log(`My name is CG12 `);
}

sayMyName();

function add2Numbers(num1,num2) //when we define a function and that time when we are passing the variables we say them as parameters
{
    console.log(num1+num2);
}

function logginUserMessage(username){
    if(!username){
        console.error("Please enter a Username");
        return ;
    }
    console.log(`${username} , Just Logged In` );
}

//Function Calling 
add2Numbers(3,"45"); //while calling a function these parameters become arguements
logginUserMessage();

