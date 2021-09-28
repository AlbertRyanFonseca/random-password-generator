// Assignment code here
userCharacters = prompt("How many characters do you want in your password? Please choose between 8-128 characters");
console.log(userCharacters);

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
