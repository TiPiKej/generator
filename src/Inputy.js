import React, {Component} from 'react';
import { inputStyles, infoStyles, divsStyles } from './styles';

export class Inputy extends Component{
	constructor(props){
		super(props);

		this.state = {
			checked: props.checkedArray
		}

		switch(this.props.whichOne){
			case "special":
				this.whichOne = "Znaki specjalne: "
				break;
			case "numbers":
				this.whichOne = "Cyfry: "
				break;
			case "letters":
				this.whichOne = "Litery: "
				break;
			default:
				this.whichOne = "Ile liczb: "
				break;
		}
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if(prevProps.checkedArray !== this.props.checkedArray){
			this.setState({checked: this.props.checkedArray})
		}
	}

	render(){
		if(this.props.whichOne === undefined){
			return(
				<div style={divsStyles}>
					<p>Ile liczb: </p>
	        <input
	          style={inputStyles}
	          type="number"
	          value={this.props.counts}
	          onChange={this.props.changingCounts} />
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
	          style={infoStyles}
	          title={this.props.thisArray.join(', ')}>
	          {this.whichOne} 
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