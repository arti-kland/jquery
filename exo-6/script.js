console.log("exercice 6");

$(document).ready(function () {
    $(".alert-warning ").hide();
    $(".btn-primary ").on("click", function () {
        $(".alert-warning ").hide();
        var $email = $("#exampleInputEmail1").val();
        var $password = $("#exampleInputPassword1").val();
        var $emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        if ($email === "" && $password === "") {
            $(".alert-warning ").show().text("merci de rentrer votre e-mail et votre mot de passe !");
        } else if ($email === "") {
            $(".alert-warning ").show().text("merci de rentrer votre e-mail !");
        } else if(!$emailReg.test($email)){
            $(".alert-warning ").show().text("ceci n'est pas une adresse e-mail valide !");
        }else if ($password === "") {
            $(".alert-warning ").show().text("merci de rentrer votre mot de passe !");
        } else if ($password.length < 6 ) {
            $(".alert-warning ").show().text("merci de rentrer mot de passe contenant 6 caractéres minimum !");
        }else {
            window.alert("Bienvenue " + $email + " Vous êtes connecté");
        }
    });

});
