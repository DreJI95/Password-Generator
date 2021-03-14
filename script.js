// Assignment code here
var userEntryLength;

var passwordLength = function()
{
  userEntryOfLength = window.prompt("Enter a number for the password length between 8 and 128 characters");

 while (!userEntryOfLength){
  window.alert("You have not entered a value, Please select a numeric value between 8 and 128");
    if(window.confirm("Do you wish to cancel?"))
    {
      return 0;
    };
    passwordLength();
  }

  lengthNum = parseInt(userEntryOfLength);

  while (isNaN(lengthNum) === true || lengthNum < 8 || lengthNum > 128){
    window.alert("You have not entered a numeric value between 8 and 128");
      if(window.confirm("Do you wish to cancel?"))
      {
        return 0;
      };
      passwordLength();
    }

    return Math.floor(lengthNum);
}

var passwordCriteria =
{
  passLowerCase: ["lower case characters",false], 
  passUpperCase: ["upper case characters",false], 
  passNumericChar: ["numeric characters",false], 
  passSpecialChar: ["special characters",false]
}

var validateSelectedCriteria = function (passCriteriaText)
{
  var yOrN = window.prompt("Does your password have " + passCriteriaText + "? Enter 'y'/ yes or 'n'/ no.");

    if (!yOrN){
      if(window.confirm("Do you wish to cancel?"))
      {
        return false;
      };
    }

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
