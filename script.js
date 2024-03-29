const SUITS = ["♠", "♣", "♥", "♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "J", "K"]


export default class Deck {
    constructor(cards){
        this.cards = cards;

    }
}

class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value; 
    }
}


function freshDeck(){
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card (suit, value)
        })
    })
}