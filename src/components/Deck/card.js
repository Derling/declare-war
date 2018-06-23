import {RANK_VALUES, SUIT_VALUES, SUIT_NAMES} from './constants.js';

class Card {
	
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}

	getValue() {
		return RANK_VALUES[this.rank] + SUIT_VALUES[this.suit]
	}

	getName() {
		return (this.rank.charAt(0).toUpperCase() + this.rank.slice(1) + " of " +
			SUIT_NAMES[this.suit].charAt(0).toUpperCase() + SUIT_NAMES[this.suit].slice(1));
	}

}

export default Card;