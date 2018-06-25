import React, {Component} from 'react';
import {Deck} from '../Deck';
import {Card} from './card.js';
import {Board} from '../Board';


import {buildCards, shuffleCards} from './util';

class Game extends Component {

	constructor() {
		super();
		this.drawCards = this.drawCards.bind(this);
		this.state = {
			playerTurn: false,
			deck: shuffleCards(buildCards(Card))
		}
	}

	*drawCards(cards=1) {
		if(this.state.deck.length) {
			while (cards--) {
				let nextCard = this.state.deck.pop();
				yield nextCard;
			}
			this.setState({deck: this.state.deck, playerTurn: !this.state.playerTurn})
		}
	}

	render() {
		return (
			<div>
				<Deck deck={this.state.deck}/>
				<Board pTurn={this.state.playerTurn} draw={this.drawCards} />
			</div>

		);
	}
}

export {Game};