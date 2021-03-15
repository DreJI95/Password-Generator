// Assignment code here

//Request user to enter a password length
var passwordLength = function()
{
  var userEntryOfLength = window.prompt("Enter a number for the password length between 8 and 128 characters");

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


// Requests the user to specify their password criteria---------
var validateSelectedCriteria = function (passCriteriaText)
{
  var yOrN = window.prompt("Does your password have " + passCriteriaText + "? Enter 'y'/ yes or 'n'/ no.");

    //Ensures the user inputs a not-null value
    if (!yOrN){
      if(window.confirm("Do you wish to skip?"))
      {
        return false;
      }
      else {
        passCriteriaText = false;
        validateSelectedCriteria(passCriteriaText);
      }
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
          if(window.confirm("Do you wish to skip?"))
          {
            return false;
          }
          else {
            passCriteriaText = false;
            validateSelectedCriteria(passCriteriaText);
          }
      }
    }
    return false;
}


//Calls method to ask user for password criter. 
var validatePasswordCriteria = function() {

  var criteriaNum = Number;

  passwordCriteria.passLowerCase[1] = validateSelectedCriteria(passwordCriteria.passLowerCase[0]);

  passwordCriteria.passUpperCase[1] = validateSelectedCriteria(passwordCriteria.passUpperCase[0]);

  passwordCriteria.passNumericChar[1] = validateSelectedCriteria(passwordCriteria.passNumericChar[0]);

  passwordCriteria.passSpecialChar[1] = validateSelectedCriteria(passwordCriteria.passSpecialChar[0]);

    //Validates that one or more criteria values are true.
  if (passwordCriteria.passLowerCase[1] === false && 
    passwordCriteria.passUpperCase[1] === false && 
    passwordCriteria.passNumericChar[1] === false && 
    passwordCriteria.passSpecialChar[1] === false)
  {
    window.alert("You have no responses for all password criteria!");
    if(window.confirm("Do you wish to cancel?"))
    {
      return 0;
    }
      validatePasswordCriteria();
  }
}


//Used to generate user password based on length and password criteria specificed.
var passwordCharacterGenerator = function (lengthOfPassword){
  var passwordCharacters = [];
  var passwordRules = [passwordCriteria.passLowerCase[1],passwordCriteria.passUpperCase[1],passwordCriteria.passNumericChar[1],passwordCriteria.passSpecialChar[1]];
  var arrayOfNumericCharacters = ['0','1','2','3','4','5','6','7','8','9'];
  var arrayOfAlphaCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var arrayOfUpperCaseAlphaCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var arrayOfSpecialCharacters = ['!','"','#','$','%','&','\'','(',')','*','+',',','-','.',':',';','=','<','>','?','[',']','^','_','`','{','}','|','~'];

      //Generates random alphabet character from an array
      var alphaCharacter = function ()
      {
        return arrayOfAlphaCharacters[Math.max(0,Math.floor(arrayOfAlphaCharacters.length * (Math.random())))];
      }

      //Generates random number from an array
      var numericCharacter = function ()
      {
        return arrayOfNumericCharacters[Math.max(0,Math.floor(arrayOfNumericCharacters.length * (Math.random())))];
      }

      //Generates random special characters from an array
      var specialCharacters = function ()
      {
        return arrayOfSpecialCharacters[Math.max(0,Math.floor(arrayOfSpecialCharacters.length * Math.random()))];
      }

  //For loop populates password characters based on specified length
  for (var x = 0; x < lengthOfPassword; x++)
  {
    var y = (Math.max(0,Math.floor(4*Math.random())));

    //while loop checks the password criteria specified by the user
    while (passwordRules[y] === false)
    {
      y = (Math.max(0,Math.floor(4*Math.random())));
      passwordRules[y] = passwordRules[y];
    }

    if (y === 0) //condition if lower case characters are included
    {
    passwordCharacters[x] = alphaCharacter().toLowerCase();
    }
    else if (y === 1) //condition if upper case characters are included
    {
      passwordCharacters[x] = alphaCharacter().toUpperCase();
    }
    else if (y === 2) //condition if numeric characters are included
    {
      passwordCharacters[x] = numericCharacter();
    }
    else //condition if special characters are included
    {
      passwordCharacters[x] = specialCharacters();
    }
  }

  //Checks that password matches selected criteria
  for (var z = 0; z < 4; z++)
  {
    if (passwordRules[0] === true) //condition if lower case characters are included
    {
      passwordCharacters.includes(arrayOfAlphaCharacters);
    }
    else if (passwordRules[1] === true) //condition if upper case characters are included
    {
      passwordCharacters.includes(arrayOfUpperCaseAlphaCharacters);
    }
    else if (passwordRules[2] === true) //condition if numeric characters are included
    {
      passwordCharacters.includes(arrayOfNumericCharacters);
    }
    else if (passwordRules[3] === true) //condition if special characters are included
    {
      passwordCharacters.includes(arrayOfSpecialCharacters);
    }
    else{
      passwordCharacterGenerator(lengthOfPassword);
    }
  }

  return passwordCharacters.join('');
}


var generatePassword = function (){
  window.alert("Password Criteria: \n 1) Length with range of 8 to 128 characters \n 2) Lowercase \n 3) Uppercase \n 4) Numeric \n 5) Special characters ");
  var passwordLengthCompleted = passwordLength();

    // Conditions in place if user decides to skip or if their password meets none of the criteria rules
  if (passwordLengthCompleted > 0) {
    if (validatePasswordCriteria() !== 0)
    {
    return passwordCharacterGenerator(passwordLengthCompleted);
    }  
  }
  // Returns value of blank and maintains data integrity by removing any previous entries if user decides to skip.
  return " ";
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
