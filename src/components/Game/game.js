import React, {Component} from 'react';
import {Deck} from '../Deck';
import {Card} from './card.js';


import {buildCards, shuffleCards} from '../util';

class Game extends Component {

	constructor() {
		super();
		this.state = {
			playerTurn: true,
			deck: [],
		}
	}

	componentWillMount() {
		this.setState({deck: shuffleCards(buildCards(Card))});
	}

	*drawCards(cards=1) {
		console.log("in function");
		if(this.state.deck.length) {
			while (cards--) {
				let nextCard = this.state.deck.pop();
				yield nextCard;
			}
		}
		this.setState({deck: this.state.deck})
	}

	render() {
		return (
			<div>
				<Deck deck={this.state.deck}/>
			</div>

		);
	}
}

export {Game};