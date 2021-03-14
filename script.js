// Assignment code here
var userEntryLength;
var userStaysOrGoes; //checks if user wishes to continue or not; If not return password length as undefined.

var passwordLength = function()
{
  userEntryOfLength = window.prompt("Enter a number for the password length between 8 and 128 characters");

 while (!userEntryOfLength){
  window.alert("You have not entered a value, please select a numeric value between 8 and 128");
    if(window.confirm("Do you wish to cancel?"))
    {
      return 0;
    };
    userStaysOrGoes = true;
    passwordLength();
  }

  lengthNum = parseInt(userEntryOfLength);

  while (isNaN(lengthNum) === true || lengthNum < 8 || lengthNum > 128){
    window.alert("You have not entered a numeric value between 8 and 128");
      if(window.confirm("Do you wish to cancel?"))
      {
        return 0;
      };
      userStaysOrGoes = true;
      passwordLength();
    }

    return Math.floor(lengthNum);
}

// var passwordLength =
// {
  
// }

var generatePassword = function (){
  window.alert("Password Criteria: \n 1) Length with range of 8 to 128 characters \n 2) Lowercase \n 3) Uppercase \n 4) Numeric \n 5) Special characters ");
  console.log(passwordLength());
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
