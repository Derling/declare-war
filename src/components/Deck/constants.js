const RANK_VALUES = {"ace": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5, "7": 6, "8": 7, "9": 8, "10": 9, "jack": 10, "queen": 11, "king": 12};
const SUIT_VALUES = {"♠": 0, "♥": 1, "♦": 2, "♣": 3};
const SUIT_NAMES = {"♠": "clubs", "♦": "diamonds", "♥": "hearts", "♣": "spades"}


const buildCards = () => {
	let RANKS = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
	let SUITS = ["♠", "♦", "♥", "♣"];
	let cards = [];
	for(let i=0; i < RANKS.length;i++) {
		for(let j=0; j < SUITS.length; j++) {
			cards.push([RANKS[i], SUITS[j]]);
		}
	}
	return cards;
}

export {RANK_VALUES, SUIT_VALUES, SUIT_NAMES, buildCards};