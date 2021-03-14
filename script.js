// Assignment code here
var userEntryLength;

//Request user to enter a password length
var passwordLength = function()
{
  userEntryOfLength = window.prompt("Enter a number for the password length between 8 and 128 characters");

  //Ensures that a value is entered
 while (!userEntryOfLength){
  window.alert("You have not entered a value, Please select a numeric value between 8 and 128");
    if(window.confirm("Do you wish to cancel?"))
    {
      return 0;
    };
    passwordLength();
  }

    //Ensures the user entry is a numeric value
  lengthNum = parseInt(userEntryOfLength);

  while (isNaN(lengthNum) === true || lengthNum < 8 || lengthNum > 128){
    window.alert("You have not entered a numeric value between 8 and 128");
      if(window.confirm("Do you wish to cancel?"))
      {
        return 0;
      };
      passwordLength();
    }

      //Handles decimal values and rounds the password length to the lower whole number
    return Math.floor(lengthNum);
}

var passwordCriteria =
{
  passLowerCase: ["lower case characters",false], 
  passUpperCase: ["upper case characters",false], 
  passNumericChar: ["numeric characters",false], 
  passSpecialChar: ["special characters",false]
}

// Requests the user to specify their password criteria
var validateSelectedCriteria = function (passCriteriaText)
{
  var yOrN = window.prompt("Does your password have " + passCriteriaText + "? Enter 'y'/ yes or 'n'/ no.");

    //Ensures the user inputs a not-null value
    if (!yOrN){
      if(window.confirm("Do you wish to cancel?"))
      {
        return false;
      };
    }

    //conditions to ensure the user enters a yes or no option for the password criteria
    else{
        if (yOrN.toLowerCase() === 'y' || yOrN.toLowerCase() === 'yes')
      {
        return true;
      }
      else if (yOrN.toLowerCase() === 'n' || yOrN.toLowerCase() === 'no'){
        return false;
      }
      else{
          window.alert("You have not selected a yes or no response!");
          if(window.confirm("Do you wish to cancel?"))
          {
            return false;
          }
      }
    }

    validateSelectedCriteria(passCriteriaText);
}

//Calls method to ask user for password criter. Validates that one or more criteria values are true.
var validatePasswordCriteria = function() {
  passwordCriteria.passLowerCase[1] = validateSelectedCriteria(passwordCriteria.passLowerCase[0]);
  console.log(passwordCriteria.passLowerCase);

  passwordCriteria.passUpperCase[1] = validateSelectedCriteria(passwordCriteria.passUpperCase[0]);
  console.log(passwordCriteria.passUpperCase);

  passwordCriteria.passNumericChar[1] = validateSelectedCriteria(passwordCriteria.passNumericChar[0]);
  console.log(passwordCriteria.passNumericChar);

  passwordCriteria.passSpecialChar[1] = validateSelectedCriteria(passwordCriteria.passSpecialChar[0]);
  console.log(passwordCriteria.passSpecialChar);

}

//Used to generate user password based on length and password criteria specificed.
var passwordCharacterGenerator = function (){

}

var generatePassword = function (){
  window.alert("Password Criteria: \n 1) Length with range of 8 to 128 characters \n 2) Lowercase \n 3) Uppercase \n 4) Numeric \n 5) Special characters ");
  console.log(passwordLength());
  validatePasswordCriteria();
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
