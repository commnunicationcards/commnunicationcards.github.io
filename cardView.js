var cardIndex = 0
var cardsArray = [];
var hide = false



$(document).ready(function(){
  cardsArray = JSON.parse(localStorage.getItem("cards"))
  if(cardsArray == null || cardsArray.length == 0){
    cardsArray = ["Press 'Editor' to go to the editor", "Press 'Delete' to delete a card", "Type a card and press 'Add Card' to add a card","Choose either 'Save Changes' or 'Discard Changes'", "Delete all cards to restore default cards"]
  }
  $("#cardContent").text(cardsArray[cardIndex])
})

function hideControls() {
  if(!hide){
    $("#hideControls").val("+")
    $("#hideControls").css("width", "10%")
    hide = true
  } else {
    $("#hideControls").val("Hide controls")
    $("#hideControls").css("width", "32%")
    hide = false
  }
  $("#nextCard").fadeToggle()
  $("#prevCard").fadeToggle()
  $("#editButton").fadeToggle()
}

function nextCard() {
  if(cardIndex == cardsArray.length-1){
    cardIndex = 0
  } else {
    cardIndex++
  }
  $("#cardContent").text(cardsArray[cardIndex])
}

function prevCard() {
  if(cardIndex == 0){
    cardIndex = cardsArray.length-1
  } else {
    cardIndex--
  }
  $("#cardContent").text(cardsArray[cardIndex])
}
