import React, {PureComponent} from 'react';
import {ActionsCard} from './ActionsCard';
import {FlashMessage} from './FlashMessage';

class Actions extends PureComponent {

	render() {
		if(!this.props.actions.length) {
			return null;
		}
		console.log(this.props);
		let elements = this.props.actions.map((action, index) => 
			<ActionsCard card={action.card} key={index} />
		);
		return(
			<div>
				<FlashMessage turn={this.props.pTurn}/>
				{elements}
				<div title="Cards left in deck">
					Deck: {this.props.cards}
				</div>
			</div>
		);
	}
}

export {Actions};