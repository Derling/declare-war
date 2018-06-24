import {RANK_VALUES, SUIT_VALUES, SUIT_NAMES} from '../util';

class Card {
	
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}

	getValue() {
		return RANK_VALUES[this.rank] + SUIT_VALUES[this.suit]
	}

	description() {
		return {
			rank: this.rank,
			suit: SUIT_NAMES[this.suit]
		};
	}

}

export {Card};