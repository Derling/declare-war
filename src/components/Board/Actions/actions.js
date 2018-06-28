import React, {PureComponent} from 'react';
import {ActionsCard} from './ActionsCard';
import {FlashMessage} from './FlashMessage';

class Actions extends PureComponent {

	render() {
		let elements = this.props.actions.map((action, index) => 
			<ActionsCard card={action.card} key={index} />
		);
		return(
			<div>
				<FlashMessage turn={this.props.pTurn}/>
				{elements}
			</div>
		);
	}
}

export {Actions};