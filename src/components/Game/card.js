import {RANK_VALUES, SUIT_VALUES} from './util';

class Card {
	
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}

	getValue() {
		return RANK_VALUES[this.rank] + SUIT_VALUES[this.suit]
	}

}

export {Card};