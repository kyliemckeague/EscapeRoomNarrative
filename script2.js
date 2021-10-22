var WORDS     = ["Salvador Dali", "Frida Kalo", "Rene Magritte", "Picasso"];
        var SCRAMBLED = ["Ldrovaas Ladi", "Riadf Alko", "Reen Mgtritea", "Ciapsos"];

        var playing = true;

        while (playing) {
           var randomNumber = Math.floor(Math.random() * WORDS.length);


           var randomWord = SCRAMBLED[randomNumber];

           // alert(randomWord);

           var userInput = prompt ("Can you unscramble this word?" + "\n \t \t" + randomWord);

           console.log(userInput);

           if (userInput == WORDS[randomNumber]) {
            alert("Great job!");
           } else  {
            alert("Sorry you were incorrect. The answer is: " + "\n \t \t" + WORDS[randomNumber]);
           }


            // Grab the corresponding scrambled word from the SCRAMBLED array


          
            // prompt the user to guess the original word when given the scrambled word     

            // If the user guesses wrong, tell them they were wrong and the right word.
            
            // If the user guesses the correct word, congratulate them.

            playing = confirm("Press OK To keep playing or Cancel to quit");

            // What does confirm() return?
            // What does setting the playing variable do?
        }

        alert("goodbye!");