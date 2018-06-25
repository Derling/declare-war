class AiBrain {
	makeMove(cards, against) {
		if(cards.length === 1){
			return 0;
		}
		let oppValue = against.getValue();
		let cardValues = cards.map(card => card.getValue());
		let max = Math.max(...cardValues);
		if(max > oppValue){
			return cardValues.indexOf(max);
		}
		return cardValues.indexOf(Math.min(...cardValues));
	}
}

export {AiBrain};
