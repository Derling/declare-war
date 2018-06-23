class DeckStack {
	constrcutor() {
		this.stack = [];
	}

	push(card) {
		this.stack.push(card);
	}

	pop() {
		return this.stack.pop();
	}
	
	size() {
		return this.stack.length;
	}
}

export {DeckStack};