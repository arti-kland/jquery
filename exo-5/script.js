console.log("exercice 5");
$(document).ready(function () {

    $("img").on("click", function () {
        var $userChoice = $(this).attr("value")
        $("#userChoice").text("vous avez choisi " + $userChoice);
        playGame($userChoice);

    })
    //playGame();
});

    function getComputerChoice() {
        var des = Math.floor(Math.random()*3);
        var computerChoice = '';
        switch (des) {

            case 0:
                computerChoice = 'rock'
                break;

            case 1:
                computerChoice = 'paper'
                break;

            case 2:
                computerChoice = 'scissors'
                break;
        }
        $("#computerChoice").text("L\'ordinateur à choisi " + computerChoice)
      return computerChoice;
    }

    function determineWinner(userChoice, computerChoice) {
        if (userChoice === 'bomb') {
            $("#resultat").text("Vous avez ganée !!!").css("color", "green");
        }

        if (userChoice === computerChoice) {
            $("#resultat").text("Match nul !!!").css("color", "grey");
        }

        if (userChoice === 'rock') {
            if (computerChoice === 'scissors') {
                $("#resultat").text("Vous avez ganée !!!").css("color", "green");
            } else if (computerChoice === 'paper') {
                $("#resultat").text("Vous avez perdu !!!").css("color", "red");
            }
        }

        if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                console.log('vous avez gagné !!!!')
                $("#resultat").text("Vous avez ganée !!!").css("color", "green");
            } else if (computerChoice === 'scissors') {
                $("#resultat").text("Vous avez perdu !!!").css("color", "red");
            }
        }

        if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                $("#resultat").text("Vous avez ganée !!!").css("color", "green");
            } else if (computerChoice === 'rock') {
                $("#resultat").text("Vous avez perdu !!!").css("color", "red");
            }
        }
    }

    function playGame($userChoice) {
        var computerChoice = getComputerChoice();
        determineWinner($userChoice, computerChoice);       
    }


