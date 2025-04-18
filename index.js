const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
    "U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@",
    "#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")
let passwordsGenerated = false

function generateRandomPassword() {
    passwordsGenerated = true
    passwordOne.textContent = ""
    passwordTwo.textContent = ""
    for (let i = 0; i < 15; i++) {
        let generatePassword1 = Math.floor( Math.random() * characters.length )
        let generatePassword2 = Math.floor( Math.random() * characters.length )
        // return characters[i]
        // return characters[generatePassword2]

        passwordOne.textContent += characters[generatePassword1]
        passwordTwo.textContent += characters[generatePassword2]
    }
}