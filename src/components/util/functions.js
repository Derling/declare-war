const buildCards = cardObj => {
	let RANKS = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];
	let SUITS = ["♠", "♦", "♥", "♣"];
	let cards = [];
	for(let i=0; i < RANKS.length;i++) {
		for(let j=0; j < SUITS.length; j++) {
			cards.push(new cardObj(RANKS[i], SUITS[j]));
		}
	}
	return cards;
}

const shuffleCards = cards => {
	let shuffled = cards.slice(0);
	let i = cards.length;
	let index, temp;
	while (i--) {
		index = Math.floor((i + 1) * Math.random());
		temp = shuffled[index];
		shuffled[index] = shuffled[i];
		shuffled[i] = temp; 
	}
	return shuffled;
}

export {buildCards, shuffleCards};