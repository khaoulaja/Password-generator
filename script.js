// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase="abcdefghijklmnopqrstuvwxyz"
var numbers="1234567890";
var specialChar='!"#$%&'+"'()*+,-./:;<=>?@[\]^_`{|}~";
var selectedCritirea ="";
var pwd ="";
var length;


function generatePassword(){
  //confirn user critirea
  
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

  if(selectedCritirea.length>0){
      console.log(selectedCritirea);

      for(i=0; i<length; i++){
          pwd +=selectedCritirea.charAt(Math.random()*selectedCritirea.length);

      }
      // window.alert(pwd);

  }
  else{
  window.alert("At least one charater type should be selected");
  // generatePassword();
  }
 return pwd;

}

// Write password to the #password input
function writePassword() {
  length = window.prompt("Enter the number of characters desired in your password:");
  if(length>7 && length<129){

    generatePassword();
    } 
    else if(length<8 || length>128 || Number.isInteger(parseInt(length)) === false){
        while(length<8 || length>128 || Number.isInteger(parseInt(length)) === false){
        length = window.prompt("Enter a valid number! The number should be at least 8 and no more than 128.");
            
        }
        generatePassword();
    }
    
  var password = pwd;
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

