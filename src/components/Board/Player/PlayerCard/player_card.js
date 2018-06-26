import React, {PureComponent} from 'react';
import {getTitle, getImgSrc, HUMAN, CARDBACK} from '../../util';

import './style.css';

class PlayerCard extends PureComponent {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.playCard(this.props.cardIndex);
	}

	render() {
		if(!this.props.card) {
			return null;
		}
		let card = this.props.card;
		let title = this.props.cardType === HUMAN ? getTitle(card) : null;
		let imgSrc = this.props.cardType === HUMAN ?  getImgSrc(card) : CARDBACK;
		let onClickHandler = this.props.cardType === HUMAN ? this.handleClick : null;
		return (
			<div className="card-wrapper" title={title} 
				onClick={onClickHandler}>
				<img className="card" src={imgSrc} alt={title}/>
			</div>
		);
	}
}

export {PlayerCard};