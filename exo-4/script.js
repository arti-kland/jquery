console.log("exercice 4");


$(document).ready(function () {

    $(".form-inline button").on("click", function () {//fonction qui cible sur l'id signUp du document html 
        var $email = $("input").val();// variable (email) qui cible sur le tag input du doc html et qui recupere la valeur de l'input
        window.alert("Merci " + $email + " nous vous tiendrons informé des différentes offres");//fonction window.alert qui ouvre une fenetre d'alerte avec les infos inserées soit le mssegae concatené avec l'email recuperé

    });

    $(".navbar-nav a:eq(1)").dblclick(function () {//fonction qui cible sur la classe(.navbar-nav), sur la deuxieme ancre (a:ep(1), et qui en cas de double click (.dblclick)
        $(this).hide();//l'objet courant (this) ou $(".navbar-nav a:eq(1)") disparait en cas de double click grace a la fonction (.hide)
    });

    var $click = 0;//variable click initialisée a 0
    $("img").on("click", function () {//fonction qui cible toute les balise img grace au tag (img), et qui en cas de click grace a la fonction .on("click")
        $click++//j'incremente ma variable click
        var $panier = $(".glyphicon-shopping-cart");//var qui pointe sur la classe (.) .glyphicon-shopping-cart et qui la recupere 
        var $li = $(".glyphicon-shopping-cart").parent();//var qui pointe sur le parent de la classe (.) .glyphicon-shopping-cart et qui la recupere 
        $li.text("cart" + " " + $click);//on utilise la variable $li pour la concatener avec notre variable click
        $li.prepend($panier);//on utilise la variable $li et on lui ajoute la variable $panier pour reafficher l'icone du panier
    });

    $("img").on("mouseenter", function () {//fonction qui cible le tag img et qui y applique la fonction .on(mouseenter) "soit si la sourit passe sur cette image !!""
        var $product = $(this).closest(".panel").find(".panel-footer").text();//(var $product qui recupere l'element courent ($this) et qui ensuit egrace  ala fonction .closest var rmonter au parent indiqué "panel", puis redscent vers l'enfant indiqué  grace a .find(".panel-footer") et recupere la valeur du texte grace a la fonction .text() 
        console.log('l\'utilisateur regarde ' + $product);//j eretourne le texte concatené avec la valeur texte de la variable product
  
    })

    $(".form-inline input").on("click keypress", function(event){//fonction qui cible sur input de la classe form-inline, et applique la function on(click,keypress) pour recuperer si il ya click et si il ya un keypress de l'user
        var $userText = $(this).val();//variable $userText qui stock les valeur de l'objet l'element courant
        console.log($userText);// j'affiche les valeur sde ma variable

    });

    $("img").on("click", function(){//fonction qui cible toute les balise img grace au tag (img), et qui en cas de click grace a la fonction .on("click")
        var $panier = $(".glyphicon-shopping-cart");//var qui pointe sur la classe (.) .glyphicon-shopping-cart et qui la recupere 
        var $li = $(".glyphicon-shopping-cart").parent();//var qui pointe sur le parent de la classe (.) .glyphicon-shopping-cart et qui la recupere 
        var $qteProduct = $(this).closest(".panel").find(".panel-footer").text().replace(/[a-zA-Z]/g, "");//var qui navig de l'elemnet courent vers le parent ayant la classe panel grace a la fonction .closest(.panel), et qui ensuite navigue vers l'enfant ayant la class panel-footer grace a la fonction .fin(.panel-footer), puis recuppere le text liée grace a .text(), et remplace par "" (rien) les les caracteres de a à z et les capitales A à Z avec /[a-zA-Z]/g, sur la globalite grace au drapeau g.
        $li.text("cart" + " " + $qteProduct);//on  utilise la variable $li pour la concatener avec notre variable qteProduc
        $li.prepend($panier);//on utilise la variable $li et on lui ajoute la variable $panier pour reafficher l'icone du panier
    })
   

});




