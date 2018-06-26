import React, {Component} from 'react';
import {ActionsCard} from './ActionsCard';

class Actions extends Component {
	render() {
		if(!this.props){
			return null;
		}
		let elements = this.props.actions.map((card, index) => 
			<ActionsCard card={card} key={index} />
		);
		return(
			<div>
				{elements}
			</div>
		);
	}
}

export {Actions};