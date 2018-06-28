import React, {PureComponent} from 'react';
import {HUMAN, HUMANCARD} from '../../util';

import './style.css';

class PlayerCard extends PureComponent {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.playCard(HUMANCARD, this.props.cardIndex);
	}

	render() {
		if(!this.props.card) {
			return null;
		}
		let card = this.props.card;
		let title = this.props.cardType === HUMAN ? card.getTitle() : null;
		let imgSrc = this.props.cardType === HUMAN ?  card.getImg() : card.getCardBack();
		let onClickHandler = this.props.cardType === HUMAN ? this.handleClick : null;
		return (
			<div className="card-wrapper" title={card.getTitle()} 
				onClick={onClickHandler}>
				<img className="card" src={imgSrc} alt={title}/>
			</div>
		);
	}
}

export {PlayerCard};