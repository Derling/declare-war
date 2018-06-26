import React, { Component } from 'react';
import {Actions} from './Actions';
import {Player} from './Player';
import {HUMAN, AI, AiBrain} from './util';

class Board extends Component {

	constructor(props) {
		super(props);
		this.placeCard = this.placeCard.bind(this);
		this.state = {
			playerCards: this.props.draw(4),
			aiCards: this.props.draw(4),
			actions: []
		}
		this.ai = new AiBrain();
	}

	updateActions(newAction) {
		return this.state.actions.length === 2 ?
			[newAction] : this.state.actions.concat([newAction])
	}

	placeCard(player, cardIndex) {
		let cards = this.state[player];
		let lastPlayed = cards[cardIndex];

		let [newCard] = this.props.draw();
		cards[cardIndex] = newCard;

		let actions = this.updateActions(lastPlayed);
		this.setState({[player]: cards, actions});
		

		if(player === HUMAN) {
			setTimeout(() => this.aiTurn(lastPlayed), 1000);
		}
	}

	aiTurn(against=null){
		console.log(this.state.aiCards);
		let move = this.ai.makeMove(this.state.aiCards, against);
		this.placeCard(AI, move);
	}

	render() {
		return (
			<div>
				<Player placeCard={this.placeCard}
					playerType={AI} 
					cards={this.state.aiCards}/>
				<Actions actions={this.state.actions}/>
				<Player placeCard={this.placeCard}
					playerType={HUMAN}
					turn={this.props.pTurn}  
					cards={this.state.playerCards}/>
			</div>
		);
	}
}

export {Board};