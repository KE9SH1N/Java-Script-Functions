const captcha = document.querySelector(".captcha-code"),
reloadBtn = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
checkBtn = document.querySelector(".check-btn"),
statusText= document.querySelector(".status-text");

//storing all captcha characters in array
let allCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];



function getCaptcha(){
    for(let i = 0; i<6; i++){  // getting 6 random characters from the array
        let randomChar = allCharacters[Math.floor(Math.random()*allCharacters.length)];
        captcha.innerHTML += ` ${randomChar}`; // passing 6 random characters inside captcha code innerText place
    }


}
getCaptcha(); //calling getCaptcha when the page open

//refresh the captcha code
reloadBtn.addEventListener("click", ()=>{
    removeContent();
    getCaptcha();
});

checkBtn.addEventListener("click", e =>{
    e.preventDefault(); //preventing button from its default behaviour 
    statusText.style.display = "block";
    //adding space after each character input cz the captcha code appear like this

    let inputVal = inputField.value.split('').join(' ');
    if(inputVal == captcha.innerText){
        statusText.style.color = "#4db2ec";
        statusText.innerText = "Nice! You don't appear to be a robot.";
    }else{
        statusText.innerText ="Captcha Not Matched! Try again";
        
    }
});


function removeContent(){
    inputField.value = "";
    captcha.innerText = "";
    statusText.style.display = "none";
   }