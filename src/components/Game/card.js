import {RANK_VALUES, SUIT_VALUES, getImgSrc, getTitle, getCardBack} from './util';

class Card {
	
	constructor(rank, suit) {
		this.rank = rank;
		this.suit = suit;
	}

	getValue() {
		return RANK_VALUES[this.rank] + SUIT_VALUES[this.suit]
	}

	getImg() {
		return getImgSrc(this);
	}

	getTitle() {
		return getTitle(this);
	}

	getCardBack() {
		return getCardBack();
	}

}

export {Card};