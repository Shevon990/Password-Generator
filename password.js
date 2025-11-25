const generatePassword = document.getElementById("generate");
generatePassword.onclick = function(){


let num = document.getElementById("numOfElements").value;
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const symbols = document.getElementById("symbols");
const numbers = document.getElementById("numbers");
const answer1 = document.getElementById("result1");
const answer2 = document.getElementById("result2");


const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbolChars = "!@~#£$^&*()_-+{}[]~`¬?<>,./:=";
const numChars = "0123456789";


let isZero = false;

let allowedChars = "";
let password = "";

num = Number(num);



    if(lowercase.checked){
        allowedChars += lowerCaseChars;
    }
    if(uppercase.checked){
        
        allowedChars += upperCaseChars;
    }
    if(symbols.checked){

        allowedChars += symbolChars;
    }
    if(numbers.checked){
        
        allowedChars += numChars;
    }

    if(allowedChars.length===0){
        answer1.textContent = `Please select at least 1 set of characters to generate the password`;
        isZero = true;

    }

    for(let i = 0 ; i< num ; i++){

        const randomIndex =  Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];



    }
    if(isZero===false){
        answer2.textContent = `Your password is ${password}`;
    }



    

}