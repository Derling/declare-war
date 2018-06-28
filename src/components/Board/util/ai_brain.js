const getMax = values => {
	let index = 0;
	let max = 0;
	while(index < values.length) {
		if((values[max] && values[max]) &&
			(values[index] > values[max])) {
			max = index;
		}
		else if(values[index] && !values[max]) {
			max = index;
		}
		index++;
	}
	return [values[max], max];
}

const getMin = values => {
	let index = 0;
	let min = 0;
	while(index < values.length) {
		if((values[index] && values[min]) &&
			(values[index] < values[min])) {
			min = index;
		}
		else if(values[index] && !values[min]){
			min = index;
		}
		index++;
	}
	return min;
}


class AiBrain {
	makeMove(cards, against=null) {
		let cardValues = cards.map(card => card ? card.getValue() : null);
		let [maxValue, index] = getMax(cardValues);
		let oppValue = against ? against.getValue() : null;
		if(!oppValue || maxValue > oppValue) {
			return index;
		}
		return getMin(cardValues);
	}
}

export {AiBrain};
