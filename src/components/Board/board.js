import React, { Component } from 'react';
import {Player} from './Player';
import {draw, HUMAN, AI} from './util';

class Board extends Component {

	constructor(props) {
		super(props);
		this.placeCard = this.placeCard.bind(this);
		this.state = {
			playerCards: [],
			aiCards: [],
		}
	}

	placeCard(player, cardIndex, image) {
		// send card that gets played to Actions component and display image
		if(player === HUMAN) {
			let playerCards = this.state.playerCards
			playerCards[cardIndex] = draw(this.props.draw)[0];
			this.setState({playerCards});
		}
		else {
			let aiCards = this.state.aiCards;
			aiCards[cardIndex] = draw(this.props.draw)[0];
			this.setState({aiCards});
		}
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
					turn={this.props.pTurn}  
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