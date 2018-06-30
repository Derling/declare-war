import React, {PureComponent} from 'react';
import {HUMAN} from '../util';
import './style.css';

const PLAYERSCORE = "Your Score"
const AISCORE = "Opponent Score"

class Score extends PureComponent {
	render() {
		let title = this.props.player === HUMAN ? PLAYERSCORE : AISCORE;
		let score = this.props.score;
		return(
			<div title={title}>
				<span className={this.props.winning ? "winning" : "losing"}>{score}</span>
			</div>
		);
	}
}

export {Score};