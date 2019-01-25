var cardIndex = 0
var cardsArray = [];



$(document).ready(function(){
  cardsArray = JSON.parse(localStorage.getItem("cards"))
  $("#cardContent").text(cardsArray[cardIndex])
})

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
