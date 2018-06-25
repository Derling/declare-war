import React, {PureComponent} from 'react';
import {CARDS} from '../../static';
import {getImgName, getTitle, HUMAN} from '../../util';

import './style.css';

class PlayerCard extends PureComponent {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(imgSrc) {
		this.props.playCard(this.props.cardIndex, imgSrc);
	}

	render() {
		if(!this.props.card) {
			return null;
		}
		let card = this.props.card;
		let imgName = getImgName(card);
		let title = getTitle(card);
		let imgSrc = this.props.cardType === HUMAN ?  CARDS[imgName]:
			CARDS.card_back;
		let onClickHandler = this.props.cardType === HUMAN ? this.handleClick : null
		return (
			<div className="card-wrapper" title={title} 
				onClick={onClickHandler}>
				<img className="card" src={imgSrc} alt={imgName}/>
			</div>
		);
	}
}

export {PlayerCard};