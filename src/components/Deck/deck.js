import React, { Component } from 'react';
import {buildCards} from './constants.js';
import Card from './card.js';
import './style.css';


class Deck extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			deck: []
		}
	}

	shuffleCards(cards) {
		// Fisher-Yates shuffle
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

	buildDeck() {
		let cards = buildCards().map(([rank, suit]) => new Card(rank, suit));
		let deck = this.shuffleCards(cards);
		this.setState({deck});
	}

	*drawCards(cards=1) {
		while (cards--) {
			let nextCard = this.state.deck.pop();
			yield nextCard;
		}
		this.setState({deck: this.state.deck});
	}

	componentWillMount() {
		this.buildDeck();
	}

	render() {
		return(
			<div>
				<div>
					{"# of cards in the deck: " + this.state.deck.length }
				</div>
			</div>
		);
	}
}

export default Deck;