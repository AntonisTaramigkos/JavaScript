const characters = ["A","B","C","D","E","F","G","H","I","J","K",
    "L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
    "p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%"
    ,"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
    ":",";","<",">",".","?",
"/"];

let firstPassEl = document.querySelector("#first-pass");
let secondPassEl = document.querySelector("#second-pass");
let numOfCharEl = document.querySelector("#number-of-chars")

function passwordGenerator() {
    
    let passList=[];// LIst where i ll add the random characters
    let numOfChars = parseInt(numOfCharEl.value);//Get the value from the input and convert it to a number

    for(let i=0; i<=numOfChars; i++){
        let randomNum = Math.floor(Math.random()*characters.length)
        passList.push(characters[randomNum])
        
    }
    console.log(`PassList: ${passList}`)
    return passList.join("")   
   
}

function copyMe(elementId) {
    // Get the text from the button element
    let textToCopy = document.getElementById(elementId).textContent;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Text copied to clipboard!");
        })
        .catch(err => {
            console.error("Failed to copy text: ", err);
        });
}
function generatePass() {
    // Generate passwords and update the button texts
    firstPassEl.textContent = passwordGenerator();
    secondPassEl.textContent = passwordGenerator();
}
