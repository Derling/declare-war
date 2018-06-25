const getImgName = card => card.rank + '_' + card.suit;
const getTitle = card => card.rank.charAt(0).toUpperCase() + 
			card.rank.substring(1) + " of " + card.suit.charAt(0).toUpperCase() +
			card.suit.substring(1)

const draw = (cb, n=1) => {
		let total = [];
		let cards = cb(n);
		let currentCard = cards.next().value;
		while (currentCard) {
			total.push(currentCard);
			currentCard = cards.next().value;
		}
		return total;
}

const HUMAN = "Player";
const AI = "AI"

export {getImgName, getTitle, draw, HUMAN, AI};