var cardsArray = [];

$(document).ready(function() {
  getCards()
  generateTable()
})


function generateTable() {
  $("#cardTable").text("")
  for(var i = 0; i < cardsArray.length; i++){
    var content = cardsArray[i]
    // if(content.length > 50){
    //   content = content.substring(0, 25)+"..."
    // }
    $("#cardTable").append(`<tr><td><input type="button" class="button" onclick="delCard(`+i+`)" value="Delete"><td>`+content+`</td></tr>`)
  }
}

function delCard(x) {
  cardsArray.splice(x,1);
  generateTable()
}

function save() {
  localStorage.setItem("cards", JSON.stringify(cardsArray))
  window.location.replace("./index.html")
}

function newCard() {
  cardsArray.push($("#newCardText").val())
  $("#newCardText").val("")
  generateTable()
}
