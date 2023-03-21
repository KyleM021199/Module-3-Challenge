// Assignment Code
var generateBtn = document.querySelector("#generate");
var getPasswordLength; 
var getPasswordCharUpper; 
var getPasswordCharNum; 
var getPasswordCharLower; 
var getPasswordCharSpecial;
var selection = [];
var passwordRandomizer = "";

function generatePassword(){
  selection = [];
  passwordRandomizer  = "";
  // Password Length prompt
  getPasswordLength = window.prompt("Choose a password length between 8 and 128 characters.");
  if(getPasswordLength >= 8 && getPasswordLength <= 128){
   var passwordLength = getPasswordLength;
  }else if(getPasswordLength < 8){
    window.alert("Password length is too short. (Needs to be 8 characters or more)");
    return;

  }else if (getPasswordLength > 128){
    window.alert("Password length is too long. (Needs to be 128 characters or less)");
    return;
  }else{
    window.alert("Enter a number between 8 and 128.");
    return;
  }
  //Character selection comfirmation
   //Uppercase
   getPasswordCharUpper = window.confirm("Do you want uppercase characters?");
   if(getPasswordCharUpper){
    selection.push(getPasswordCharUpper);
  }else if(getPasswordCharUpper == false){
    selection.push(getPasswordCharUpper);
  }
  console.log(getPasswordCharUpper);
     //Lowercase
     getPasswordCharLower = window.confirm("Do you want lowercase characters?");
     if(getPasswordCharLower){
      selection.push(getPasswordCharLower);
      
    }else if(getPasswordCharLower == false){
      selection.push(getPasswordCharLower);
    }
      //Numbers
     getPasswordCharNum = window.confirm("Do you want numbers?");
     if (getPasswordCharNum){
      selection.push(getPasswordCharNum);
     }else if(getPasswordCharNum == false){
      selection.push(getPasswordCharNum);
    }
     //Specials
     getPasswordCharSpecial = window.confirm("Do you want special characters?");
     if(getPasswordCharSpecial){
      selection.push(getPasswordCharSpecial);
    }else if(getPasswordCharSpecial == false){
      selection.push(getPasswordCharSpecial);
    }
    //Selection/Randomizer 
for (var i = 0; i < passwordLength; i++ ) {
    var selected = false;
    var currentSelection;
    while(!selected){
    var rannum = Math.floor(Math.random()* 4);
      if(selection[rannum]){
        currentSelection = rannum;
        selected = true;
      }
    }
    console.log(selection);
    
      switch(currentSelection){
      case 0:
      passwordRandomizer += randomUpper(); //Uppercase
      break;
      case 1:
      passwordRandomizer += randomLower(); //Lowercase
      break;
      case 2:
      passwordRandomizer += randomNum(); //Numbers
      break;
      case 3:
      passwordRandomizer += randomSpecial(); //Specials
      break;
      }
    
  
}


 return window.alert("Password: " + passwordRandomizer);
}
var charLower = "abcdefghijklmnopqrstuvwxyz";

function randomLower(){
  var lowerIndex = Math.floor(Math.random()* charLower.length);
  return charLower.charAt(lowerIndex);
}

function randomUpper(){
  var charUpper = charLower.toUpperCase();
  var upperIndex = Math.floor(Math.random()* charUpper.length);
  return charUpper.charAt(upperIndex);

}

function randomNum(){
  var numIndex = Math.floor(Math.random()* 10);
  return numIndex;

}
function randomSpecial(){
  var charSpecial = "!@#$%^&*";
  var specialIndex = Math.floor(Math.random()* charSpecial.length);
  return charSpecial.charAt(specialIndex);

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
