// Assignment code here
var lowerChar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var capitalChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numberChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var everyChar = [];

function generatePassword() {
  userCharacters = prompt("How many characters do you want in your password? Please choose between 8-128 characters");

  if (userCharacters < 8 || userCharacters > 128 || isNaN(userCharacters)) {
    userCharacters = prompt("Please enter a number between 8-128");
  } else {
    alert("Your password will be " + userCharacters + " characters long.");
  }
  console.log(userCharacters);

  confirmLowercaseChar = confirm("Would you like to include lowercase characters?");
  if (confirmLowercaseChar) {
    alert("You have chose to include lowercase character(s)");
  } else {
    alert("You have chose NOT to include any lowercase character.");
  }

  confirmCaptialChar = confirm("Would you like to include uppercase characters");
  if (confirmCaptialChar) {
    alert("You have chosen to include uppercase character(s).");
  } else {
    alert("You have chosen NOT to include any uppercase character.");
  }

  confirmNumberChar = confirm("Would you like to include numeric characters.");
  if (confirmNumberChar) {
    alert("You have chosen to include number character(s).");
  } else {
    alert("You have chosen NOT to include any number character");
  }

  confirmSpecialChar = confirm("Would you like to include special characters? i.e. @, *, &, etc.")
  if (confirmSpecialChar) {
    alert("You have chosen to include special character(s).")
  } else {
    alert("You have chosen NOT to include any special character");
  }

  if (confirmLowercaseChar === false && confirmCaptialChar === false && confirmNumberChar === false && confirmSpecialChar === false) {
    return ("Please select at least one character type for your password!");
  };

  if (confirmLowercaseChar) {
    everyChar = everyChar.concat(lowerChar);
  }
  if (confirmCaptialChar) {
    everyChar = everyChar.concat(capitalChar)
  }
  if (confirmNumberChar) {
    everyChar = everyChar.concat(specialChar)
  }
  if (confirmSpecialChar) {
    everyChar = everyChar.concat(specialChar)
  }

  let userPassword = ""

  for (let i = 0; i < userCharacters; i++) {
    let rpg = [Math.floor(Math.random() * everyChar.length)];
    userPassword += everyChar[rpg];
  }

  return userPassword;
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
