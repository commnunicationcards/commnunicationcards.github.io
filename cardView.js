var cardIndex = 0
var hide = false



$(document).ready(function(){
  getCards()
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
