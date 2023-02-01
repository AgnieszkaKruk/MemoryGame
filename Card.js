import React, { Component } from "react";

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.name,
			value: this.value,
			isFlipped: false,
			isMatched: false,
		};
	}
}
