import React, {Component} from 'react';

const AIWINMSG = "You Lose";
const PLAYERWINMSG = "You Win";

class GameOverMsg extends Component {
	render() {
		let msg = this.props.pWin ? PLAYERWINMSG : AIWINMSG
		let [winScore, loserScore] = this.props.pWin ? 
			[this.props.pScore, this.props.aiScore] : 
			[this.props.aiScore, this.props.pScore];
		return (
			<div>
				<div>
					{msg}
				</div>
				<div>
					{winScore} : {loserScore}
				</div>
			</div>
		);
	}
}

export {GameOverMsg};