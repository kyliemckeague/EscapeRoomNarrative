//where to chage the password if needed//
function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "1917") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }