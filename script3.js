//the actual password//
function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value.toUpperCase();
   if(passwordText == "PERSISTENCE OF MEMORY") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }
