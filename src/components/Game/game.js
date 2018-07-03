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
			gameOver: false,
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
			this.setState({playerWinning: true}, this.checkGameOver);
		}
		else if(pScore < aiScore && !this.state.playerWinnig) {
			this.setState({playerWinning: false}, this.checkGameOver);
		}
	}

	checkGameOver() {
		if(!this.state.aiCards.filter(card => card).length &&
			!this.state.playerCards.filter(card => card).length) {
			this.setState({gameOver: true});
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
		// add component for when the game is over
		let state = this.state;
		let aiCards = state.aiCards;
		let playerCards = state.playerCards;
		let pTurn = state.playerTurn;
		let scores = {ai: state.aiScore, player: state.playerScore};
		let pWinning = state.playerWinning;
		let gameStatus = state.gameOver;
		let deck = state.deck.length;
		return (
			<div className="game">
				<Board draw={this.playTurn}
					updateScore={this.updateScore}
					gameOver={gameStatus}
					pTurn={pTurn}
					scores={scores}
					winning={pWinning}
					aiCards={aiCards}
					deck={deck}
					playerCards={playerCards}/>
			</div>

		);
	}
}

export {Game};