import React, {PureComponent} from 'react';
import {getTitle, getImgSrc} from '../../util';

class ActionsCard extends PureComponent {
	render() {
		if(!this.props.card) {
			return null;
		}
		let card = this.props.card;
		let title = getTitle(card);
		let imgSrc = getImgSrc(card);
		return(
			<div style={{display:"inline-block"}} title={title}>
				<img src={imgSrc} alt={title} />
			</div>
		);
	}
}

export {ActionsCard};