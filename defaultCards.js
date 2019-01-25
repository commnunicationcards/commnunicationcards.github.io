defaultCards = [
"----How to use---- (Press next card)",
"Press 'Editor' to go to the editor",
"Press 'Delete' to delete a card",
"Type a card and press 'Add Card' to add a card",
"Choose either 'Save Changes' or 'Discard Changes'",
"Delete all cards to restore default cards",
"----Default Cards----",
"I would like to go somewhere quiet",
"Please do not touch me",
"I would like a tight hug please",
"I do not understand, could you try rewording it?",
"Please repeat that"
]

var cardsArray = [];


function getCards() {
  cardsArray = JSON.parse(localStorage.getItem("cards"))
  if(cardsArray == null || cardsArray.length == 0){
    cardsArray = defaultCards
  }
}
