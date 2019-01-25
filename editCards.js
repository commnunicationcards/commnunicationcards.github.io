var cardsArray = [];

$(document).ready(function() {
  cardsArray = JSON.parse(localStorage.getItem("cards"))
  if(cardsArray == null){
    cardsArray = ["Your First Card!"]
  }
  generateTable()
})


function generateTable() {
  $("#cardTable").text("")
  for(var i = 0; i < cardsArray.length; i++){
    $("#cardTable").append(`<tr><td>`+cardsArray[i]+`</td><td><input type="button" onclick="delCard(`+i+`)" value="Delete"></tr>`)

  }
}

function delCard(x) {
  cardsArray.splice(x,1);
  generateTable()
}

function save() {
  localStorage.setItem("cards", JSON.stringify(cardsArray))
  window.location.href = "./index.html"
}

function newCard() {
  cardsArray.push($("#newCardText").val())
  $("#newCardText").val("")
  generateTable()
}
