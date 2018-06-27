import React, {Component} from 'react';
import {PTURNMSG, AITURNMSG} from './messages.js';
import './style.css';

class FlashMessage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			player: "player-turn-msg",
			ai: "ai-turn-msg"
		}
	}

	render() {
		let classes = this.state;
		let msg = this.props.turn ? PTURNMSG : AITURNMSG;
		return (
			<div className={this.props.turn ? classes.player : classes.ai}>
				{msg}
			</div>
		);
	}
}

export {FlashMessage};