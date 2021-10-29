//variables
var generateBtn = document.querySelector("#generate");
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase="abcdefghijklmnopqrstuvwxyz"
var numbers="1234567890";
var specialChar='!"#$%&'+"'()*+,-./:;<=>?@[\]^_`{|}~";
var selectedCritirea ="";
var pwd ="";
var length;


function generatePassword(){

  //confirm user critirea
  var confirmUpperCase =confirm("Do you want to include UpperCase letters? ");
  var confirmLowerCase =confirm("Do you want to include LowerCase letters? ");
  var confirmNumbers =confirm("Do you want to include numbers? ");
  var confirmSpecialChars =confirm("Do you want to include special characters? ");

  if(confirmUpperCase){
      selectedCritirea += upperCase;
  }
  if (confirmLowerCase){
      selectedCritirea += lowerCase;
  }
  if(confirmNumbers){
      selectedCritirea +=numbers;
  }
  if(confirmSpecialChars){
      selectedCritirea += specialChar;
  }
//make sure that at least one charcter type is selected
  if(selectedCritirea.length>0){
      console.log(selectedCritirea);
//generate a random password
      for(i=0; i<length; i++){
          pwd +=selectedCritirea.charAt(Math.random()*selectedCritirea.length);

      }
  }
  else{
  window.alert("At least one charater type should be selected");
   generatePassword();
  }
 return pwd;

}

// Write password to the #password input
function writePassword() {
    //empty the variables 
    pwd ="";
    selectedCritirea="";
  length = window.prompt("Enter the number of characters desired in your password:");
    //make sure the length is a number and is between 8 and 128
    if(length<8 || length>128 || Number.isInteger(parseInt(length)) === false){
        while(length<8 || length>128 || Number.isInteger(parseInt(length)) === false){
        length = window.prompt("Enter a valid number! The number should be at least 8 and no more than 128.");
            
        }
        generatePassword();
    }
    else{
        generatePassword();
    }
    
  var password = pwd;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

