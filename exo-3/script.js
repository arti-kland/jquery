console.log("exercice 3");

$(document).ready(function(){

    $("h1").text("Jean-philippe");
    $("#tagline").text("Mes Voyages");
    $("#myNavbar ul:first-child").hide();
    $(".glyphicon-log-in").removeClass("glyphicon-log-in").addClass("glyphicon-user");
    $("footer p").text("Copyright 2019").css("font-weight", "bold").addClass("intro");

    var num = 1;
    $("#work1 p").each(function(){
        $(this).text("Voyage "+num);
        num++;
    })
    
    var photo = ["cop.bmp", "lond.bmp", "stmart.bmp", "sydn.bmp", "berl.bmp", "estart.bmp", "avoria.bmp", "bruxe.bmp"]
    var index = 0;
    $(".img-responsive").each(function(){
       $(this).attr("src", "image/"+photo[index]).addClass("image");
       index++; 
    })

    var $p = $('<p>');
    $p.text("Mon dernier voyage");

    var $div = $('<div>');

    var $img = $('<img>');
    $img.attr("src", "image/annecy.bmp").addClass("image1");

    $div.append($p, $img);

    $("#work1").prepend($div);
});
