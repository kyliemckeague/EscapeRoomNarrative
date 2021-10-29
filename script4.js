//the actual password and where to change it if needed//
function checkPassword() {
   var password = document.getElementById("passwordBox");
    var passwordText = password.value.toUpperCase();
   if(passwordText == "DALI") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }
