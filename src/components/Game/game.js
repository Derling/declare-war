import React, {Component} from 'react';
import {Deck} from '../Deck';
import {Card} from './card.js';
import {Board} from '../Board';


import {buildCards, shuffleCards} from './util';

class Game extends Component {

	constructor() {
		super();
		this.drawCards = this.drawCards.bind(this);
		this.drawSingleCard = this.drawSingleCard.bind(this);
		this.state = {
			playerTurn: false,
			deck: [],
			playerCards: [],
			aiCards: []
		}
	}

	componentWillMount() {
		// build deck then draw 4 cards for ai and human
		this.setState({ deck: shuffleCards(buildCards(Card))}, () => this.setState({
			playerCards: this.drawCards(4), aiCards: this.drawCards(4)}));
	}

	drawCards(cards=1) {
		if(this.state.deck.length) {
			let drawnCards = []
			while (cards--) {
				let nextCard = this.state.deck.pop();
				drawnCards.push(nextCard);
			}
			this.setState({deck: this.state.deck, playerTurn: !this.state.playerTurn})
			return drawnCards;
		}
		this.setState({playerTurn: !this.state.playerTurn});
		return [null];
	}

	drawSingleCard(player, index) {
		let cards = this.state[player];
		let [newCard] = this.drawCards()
		cards[index] = newCard;
		this.setState({player: cards});
	}

	render() {
		let state = this.state;
		let deck = state.deck;
		let aiCards = state.aiCards;
		let playerCards = state.playerCards;
		return (
			<div>
				<Deck deck={deck}/>
				<Board pTurn={state.playerTurn} 
					draw={this.drawSingleCard} 
					aiCards={aiCards}
					playerCards={playerCards}/>
			</div>

		);
	}
}

export {Game};