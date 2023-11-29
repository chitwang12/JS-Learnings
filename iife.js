const axios = require('axios');

(function add(a,b){
    console.log(a+b);
})(2,3);

(function say(){
    console.log("Hey");
})();

//ES 6 IIFe i.e. arrow functions main iife

(() => console.log("I am a ES6"));

// IIFe se value store bhi kar sakte hain hum ek call main 
const value = (() => 100 )();
console.log(value);


//Why do we use IIFE ?

// Avoid Polluting the global namespace , let us say I need to declare a variable and its scope should be valid upto a block of space tak only , so we use IIFE 
// in which the variable will have its scope until the function gets executed .

//Asynchronous calls can be used for the same 

(async () =>{
    const fetchDataFromApi = async() =>{
        try{
            const res = await axios.get("https://www.instagram.com/reel/Cy6Cm7DPxr6/");

            const data = res.data;
            console.log('Fetched Data :', data);

            return data;
        }catch(err){
            console.log(err.message);
            throw error;
        }
    }
try{
    const FetchedData = await fetchDataFromApi();
}catch(err){
    console.error(err.message);
}
})();