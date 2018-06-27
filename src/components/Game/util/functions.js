const buildCards = cardObj => {
	let RANKS = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
	let SUITS = ["clubs", "hearts", "diamonds", "spades"];
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