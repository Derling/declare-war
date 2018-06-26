import {CARDS} from '../static';

const getImgName = card => card.rank + '_' + card.suit;
const getImgSrc = card => CARDS[getImgName(card)];
const getTitle = card => card.rank.charAt(0).toUpperCase() + 
			card.rank.substring(1) + " of " + card.suit.charAt(0).toUpperCase() +
			card.suit.substring(1)

const HUMAN = "playerCards";
const AI = "aiCards";
const CARDBACK = CARDS.card_back;

export {getImgName, getImgSrc, getTitle, HUMAN, AI, CARDBACK};