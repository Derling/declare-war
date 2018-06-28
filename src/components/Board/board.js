import React, { Component } from 'react';
import {Actions} from './Actions';
import {Player} from './Player';
import {HUMAN, AI, AiBrain, HUMANCARD, AICARD} from './util';

class Board extends Component {

	constructor(props) {
		super(props);
		this.playCard = this.playCard.bind(this);
		this.state = {
			actions: [],
		}
		this.ai = new AiBrain();
	}

	updateActions(cardOwner, newAction) {
		return this.state.actions.length === 2 ?
			[{player: cardOwner, card: newAction}] : 
			this.state.actions.concat([{player: cardOwner, card: newAction}])
	}

	validateActions() {
		if(this.state.actions.length === 2) {
			let actions = this.state.actions;
			let [playerValue, aiValue] = [actions[0].card.getValue(), actions[1].card.getValue()];
			if(aiValue > playerValue) {
				this.props.updateScore(AICARD, aiValue - playerValue);
			}
			else {
				this.props.updateScore(HUMANCARD, playerValue - aiValue);
			}
		}
	}

	playCard(player, cardOwner, cardIndex) {
		let cards = this.props[player];
		let lastPlayed = cards[cardIndex];
		let actions = this.updateActions(cardOwner, lastPlayed);
		this.props.draw(player, cardIndex);
		this.setState({actions}, this.validateActions);
		if(player === HUMAN) {
			setTimeout(() => this.aiTurn(lastPlayed), 1000);
		}
	}

	aiTurn(against=null){
		let move = this.ai.makeMove(this.props.aiCards, against);
		this.playCard(AI, AICARD, move);
	}

	render() {
		return (
			<div>
				<Player placeCard={this.placeCard}
					playerType={AI} 
					cards={this.props.aiCards}/>
				<Actions actions={this.state.actions}
					pTurn={this.props.pTurn}/>
				<Player placeCard={this.playCard}
					playerType={HUMAN}
					turn={this.props.pTurn}  
					cards={this.props.playerCards}/>
			</div>
		);
	}
}

export {Board};