import React, {PureComponent} from 'react';
import {ActionsCard} from './ActionsCard';
import {FlashMessage} from './FlashMessage';

class Actions extends PureComponent {

	render() {
		if(!this.props.actions.length){
			return null;
		}
		let elements = this.props.actions.map((card, index) => 
			<ActionsCard card={card} key={index} />
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