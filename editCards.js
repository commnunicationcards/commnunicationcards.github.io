var cardsArray = [];

$(document).ready(function() {
  cardsArray = JSON.parse(localStorage.getItem("cards"))
  if(cardsArray == null || cardsArray.length == 0){
    cardsArray = ["Press 'Editor' to go to the editor", "Press 'Delete' to delete a card", "Type a card and press 'Add Card' to add a card","Choose either 'Save Changes' or 'Discard Changes'", "Delete all cards to restore default cards"]
  }
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
