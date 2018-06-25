import React, { Component } from 'react';
import {PlayerCard} from './PlayerCard';

class Player extends Component {

	constructor(props) {
		super(props);
		this.makeMove = this.makeMove.bind(this);
	}

	makeMove(cardIndex, imgSrc) {
		if(this.props.turn) {
			this.props.placeCard(
				this.props.playerType, 
				cardIndex, 
				imgSrc
			);
		}
	}

	render() {
		let elements = this.props.cards.map((currentCard, index) => 
			<PlayerCard cardIndex={index}
				cardType={this.props.playerType}
				key={index} 
				playCard={this.makeMove}
				card={currentCard}/>
		);
		return(
			<div>
				{elements}
			</div>
		);
	}
}

export {Player};