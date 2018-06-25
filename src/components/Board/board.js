import React, { Component } from 'react';
//import {Actions} from './Actions';
import {Player} from './Player';
import {draw, HUMAN, AI, AiBrain} from './util';

class Board extends Component {

	constructor(props) {
		super(props);
		this.placeCard = this.placeCard.bind(this);
		this.state = {
			playerCards: [],
			aiCards: [],
		}
		this.ai = new AiBrain();
	}

	placeCard(player, cardIndex) {
		// send card that gets played to Actions component and display image
		let cards = this.state[player];
		let cardPlayed = cards[cardIndex];
		cards[cardIndex] = draw(this.props.draw);
		this.setState({[player]: cards});
		if(player === HUMAN) {
			setTimeout(() => this.aiTurn(cardPlayed), 5000);
		}
	}

	aiTurn(target){
		let move = this.ai.makeMove(this.state.aiCards, target);
		this.placeCard(AI, move);
	}

	componentWillMount() {
		let playerCards = draw(this.props.draw, 4);
		let aiCards = draw(this.props.draw, 4);
		this.setState({playerCards, aiCards});
	}

	render() {
		return (
			<div>
				<Player placeCard={this.placeCard}
					playerType={AI} 
					cards={this.state.aiCards}/>
				<Player placeCard={this.placeCard}
					playerType={HUMAN}
					turn={this.props.pTurn}  
					cards={this.state.playerCards}/>
			</div>
		);
	}
}

export {Board};