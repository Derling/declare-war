import React, { Component } from 'react';
import './style.css';

// find nice svg for back of cards to display on top of remaining cards


class Deck extends Component {

	render() {
		return(
			<div>
				<div>
					{"# of cards in the deck: " + this.props.deck.length }
				</div>
			</div>
		);
	}
}

export {Deck};