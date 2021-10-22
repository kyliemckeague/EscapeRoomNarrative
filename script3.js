//the actual password//
function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "Persistence of Memory") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }