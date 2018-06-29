import React, {Component} from 'react';
import {Card} from './card.js';
import {Board} from '../Board';


import {buildCards, shuffleCards} from './util';

class Game extends Component {

	constructor() {
		super();
		this.playTurn = this.playTurn.bind(this);
		this.updateScore = this.updateScore.bind(this);
		this.state = {
			playerTurn: true,
			playerScore: 0,
			aiScore: 0,
			deck: [],
			playerCards: [],
			aiCards: [],
		}
	}

	updateScore(player, score) {
		let newScore = this.state[player] + score;
		this.setState({[player]: newScore});
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
			return drawnCards;
		}
		return [null];
	}

	playTurn(player, index) {
		let cards = this.state[player];
		let playerTurn = !this.state.playerTurn;
		let [newCard] = this.drawCards();
		cards[index] = newCard;
		this.setState({deck: this.state.deck, playerTurn, player: cards})
	}

	render() {
		let state = this.state;
		let aiCards = state.aiCards;
		let playerCards = state.playerCards;
		let pTurn = state.playerTurn;
		return (
			<div>
				<Board pTurn={pTurn} 
					draw={this.playTurn} 
					aiCards={aiCards}
					playerCards={playerCards}
					updateScore={this.updateScore}/>
			</div>

		);
	}
}

export {Game};