import React, {PureComponent} from 'react';

class ActionsCard extends PureComponent {
	render() {
		if(!this.props.card) {
			return null;
		}
		let card = this.props.card;
		let title = card.getTitle();
		let imgSrc = card.getImg();
		return(
			<div style={{display:"inline-block"}} title={title}>
				<img src={imgSrc} alt={title} />
			</div>
		);
	}
}

export {ActionsCard};