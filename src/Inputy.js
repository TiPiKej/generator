import React, {Component} from 'react';
import './css/divsStyles.css';
import './css/infoStyles.css';
import './css/inputStyles.css';
import { connect } from "react-redux";
import * as arrays from './arrays';

export class InputyClass extends Component{
	constructor(props){
		super(props);

		this.state = {
			checked: props.checkedArray,
			lang: 'pl',
			blocked: {}
		}

		switch(this.props.whichOne){
			case "special":
				this.whichOne = {
					pl: "Znaki specjalne: ", // Polish lang
					en: "Special characters: " // English lang and others
				}
				break;
			case "numbers":
				this.whichOne = {
					pl: "Cyfry: ", // Polish lang
					en: "Numbers: " // English lang and others
				}
				break;
			case "letters":
				this.whichOne = {
					pl: "Litery: ", // Polish lang
					en: "Letters: " // English lang and others
				}
				break;
			default:
				this.whichOne = {
					pl: "Ile liczb: ", // Polish lang
					en: "How long: " // English lang and others
				}
				break;
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if(prevProps.checkedArray !== this.props.checkedArray) this.setState({checked: this.props.checkedArray});

		if(prevProps.lang !== this.props.lang) this.setState({lang: this.props.lang})

		if(prevProps.blocked !== this.props.blocked) this.setState({blocked: this.props.blocked})

		console.log(this.props.blocked)
	}

	render(){
		if(this.props.whichOne === undefined){
			return(
				<div className="divsStyles">

					<p className="title">{this.whichOne[this.state.lang]}</p>

	        <div className="inputWrapper">

		        <button
		        	className="changingValue"
		        	onClick={el => this.props.changingCounts(el, 'down')}>
		        	&#8592;
		        </button>

		        <input
		          className="inputStyles left_input right_input"
		          type="text"
		          value={this.props.counts}
		          onChange={this.props.changingCounts} />

		        <button
		        	className="changingValue"
		        	onClick={el => this.props.changingCounts(el, 'up')}>
		        	&#8594;
		        </button>

	      	</div>
	      </div>
			);
		}

		else{
			return(
				<span 
					className="wraplabel"
					onClick={el => this.props.changingCounts(el, this.props.whichOne)}>
	        <span
	        	onClick={() => false}
	          className="infoStyles"
	          title={arrays[this.props.whichOne + "Array"].join(', ')}>
	          {this.whichOne[this.state.lang]} 
	        </span>
	       	<input
		        type="checkbox"
		        checked={this.state.checked}
		        onChange={el => this.props.changingCounts(el, this.props.whichOne)} />
		    </span>
			);
		}
	}
}


const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    blocked: state.blocked
  }
};

export const Inputy = connect(mapStateToProps)(InputyClass);