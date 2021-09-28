// Assignment code here
function generatePassword() {
  userCharacters = prompt("How many characters do you want in your password? Please choose between 8-128 characters");

  if (userCharacters < 8 || userCharacters > 128 || isNaN(userCharacters)) {
    userCharacters = prompt("Please enter a number between 8-128");
  } else {
    alert("Your password will be " + userCharacters + " characters long.");
  }
  console.log(userCharacters);
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
