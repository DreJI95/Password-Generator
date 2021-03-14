// Assignment code here
var userEntryLength;

var passwordLength = function()
{
  userEntryLength = window.prompt("Enter a number for the password length between 8 and 128 characters");

 while (!userEntryLength){
  window.alert("You have not entered a value, please select a numeric value between 8 and 128");
    if(window.confirm("Do you wish to cancel?"))
    {
      break;
    };
    passwordLength();
  }
  return userEntryLength;


  // if (userEntryLength >= 8 && userEntryLength <= 128){
  //   return userEntryLength;
  // }
  // else{
  //   window.alert("You have not enter a number, please select a numeric value between 8 and 128");
  // }
}

// var passwordLength =
// {
  
// }

var generatePassword = function (){
  window.alert("Password Criteria: \n 1) Length with range of 8 to 128 characters \n 2) Lowercase \n 3) Uppercase \n 4) Numeric \n 5) Special characters ");
  console.log(passwordLength()+" "+typeof(passwordLength()));
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
