import React, { Component } from 'react';
import {Actions} from './Actions';
import {Player} from './Player';
import {HUMAN, AI, AiBrain} from './util';

class Board extends Component {

	constructor(props) {
		super(props);
		this.placeCard = this.placeCard.bind(this);
		this.state = {
			actions: [],
		}
		this.ai = new AiBrain();
	}

	updateActions(newAction) {
		return this.state.actions.length === 2 ?
			[newAction] : this.state.actions.concat([newAction])
	}

	placeCard(player, cardIndex) {
		let cards = this.props[player];
		let lastPlayed = cards[cardIndex];
		let actions = this.updateActions(lastPlayed);
		this.props.draw(player, cardIndex);
		this.setState({actions});
		if(player === HUMAN) {
			setTimeout(() => this.aiTurn(lastPlayed), 2000);
		}
	}

	aiTurn(against=null){
		let move = this.ai.makeMove(this.props.aiCards, against);
		this.placeCard(AI, move);
	}

	render() {
		return (
			<div>
				<Player placeCard={this.placeCard}
					playerType={AI} 
					cards={this.props.aiCards}/>
				<Actions actions={this.state.actions}
					pTurn={this.props.pTurn}/>
				<Player placeCard={this.placeCard}
					playerType={HUMAN}
					turn={this.props.pTurn}  
					cards={this.props.playerCards}/>
			</div>
		);
	}
}

export {Board};