console.log("exercice 7");

var $dataSource;
var $match = [];

$(document).ready(function () {

  //voir data
  $('#vue').on('click', function(){
    showData(1, data);
  })

  //Sur recherche
  $("input.form-control").on("keyup", function () {
    var $search = $(this).val();
    var $match = [];
    if ($search === "") {
      showData(1, data);
    } else {
      data.forEach(function (object) {
        if ((object.name.first + object.name.last + object.email + object.phone).toLocaleLowerCase().includes($search.toLocaleLowerCase())) {
          $match.push(object);
        }
      })
      $dataSource = $match;
      showData(1, $match);
    }
  })



  //sur tri
  $('#croissant').on('click', function () {
    triAlpha(true);
  }); $('#decroissant').on('click', function () {
    triAlpha();
  })
});


function addLineToTable(element) {
  var $row = $("<tr>");
  var $columnLastName = $("<td>").text(element.name.last);;
  var $columnFirstName = $("<td>").text(element.name.first);
  var $columnEmail = $("<td>").text(element.email);
  var $columnTelephone = $("<td>").text(element.phone);

  $columnLastName.appendTo($row);
  $columnFirstName.appendTo($row);
  $columnEmail.appendTo($row);
  $columnTelephone.appendTo($row);
  $row.appendTo($("tbody"));
}

function showData($page, $match) {
  $('tbody').empty();
  $page = parseInt($page) - 1;
  var $start = $page * 50;
  var $end = $start + 50;
  for (let i = $start; i < $end; i++) {
    if (i < $match.length) {
      var object = $match[i];
      addLineToTable(object);
    }
  }
  $dataSource = $match;
  pagi($match);
}

function pagi($match) {
  $('.navButton').remove();
  var $div = $(".navigation");
  // $div.insertAfter($(".table"));
  var itemsShow = 50;
  var nbrItems = $match.length;
  var nbgPages = Math.ceil(nbrItems / itemsShow);
  for (let i = 1; i <= nbgPages; i++) {
    var $button = $("<button>").attr({ "type": "button", "class": "btn btn-light navButton", "value": i }).text(i);
    $div.append($button);
  }
    //page navigation
  $('.navButton').on('click', function(){
    $page = $(this).text();
    showData($page, $match);
  
    })
}


function triAlpha(up) {
  $resultat = $(data).sort(function (a, b) {
    var a1 = a.name.first;
    var b1 = b.name.first;
    if(up === true){
      return a1.localeCompare(b1);
    }else{
      return b1.localeCompare(a1);
    }
  });
  $dataSource = $resultat;
  showData(1, $resultat)
};
