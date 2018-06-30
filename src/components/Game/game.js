import React, {Component} from 'react';
import {Card} from './card.js';
import {Board} from '../Board';

import './style.css';
import {buildCards, shuffleCards} from './util';

class Game extends Component {

	constructor() {
		super();
		this.playTurn = this.playTurn.bind(this);
		this.updateScore = this.updateScore.bind(this);
		this.state = {
			playerTurn: true,
			playerWinning: true,
			playerScore: 0,
			aiScore: 0,
			deck: [],
			playerCards: [],
			aiCards: [],
		}
	}

	checkWinner() {
		let [pScore, aiScore] = [this.state.playerScore, this.state.aiScore];
		if(pScore > aiScore && !this.state.playerWinnig) {
			this.setState({playerWinning: true});
		}
		else if(pScore < aiScore && !this.state.playerWinnig) {
			this.setState({playerWinning: false});	
		}
	}

	updateScore(player, score) {
		let newScore = this.state[player] + score;
		this.setState({[player]: newScore}, this.checkWinner);
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
		let turns = this.state.turns + 1;
		let playerTurn = !this.state.playerTurn;
		let [newCard] = this.drawCards();
		cards[index] = newCard;
		this.setState({deck: this.state.deck, turns, playerTurn, player: cards})
	}

	render() {
		let state = this.state;
		console.log(state.turns, state.playerTurn);
		let aiCards = state.aiCards;
		let playerCards = state.playerCards;
		let pTurn = state.playerTurn;
		let scores = {ai: state.aiScore, player: state.playerScore};
		return (
			<div className="game">
				<Board pTurn={pTurn}
					turns={state.turns}
					scores={scores}
					winning={state.playerWinning} 
					draw={this.playTurn} 
					aiCards={aiCards}
					playerCards={playerCards}
					updateScore={this.updateScore}/>
			</div>

		);
	}
}

export {Game};