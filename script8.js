function checkPassword() {
   var password = document.getElementById("passwordBox");
    var passwordText = password.value.toUpperCase();
   if(passwordText == "CLOCK") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }
