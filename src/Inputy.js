import React, {Component} from 'react';
import './css/divsStyles.css';
import './css/infoStyles.css';
import './css/inputStyles.css';

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
				<div className="divsStyles">
					<p>Ile liczb: </p>
	        <button
	        	onClick={el => this.props.changingCounts(el, 'down')}>
	        	Down
	        </button>
	        <input
	          className="inputStyles"
	          type="text"
	          value={this.props.counts}
	          onChange={this.props.changingCounts} />
	        <button
	        	onClick={el => this.props.changingCounts(el, 'up')}>
	        	Up
	        </button>
	      </div>
			);
		}
		else{
			return(
				<span>
		      <label>
		        <span
		          className="infoStyles"
		          title={this.props.thisArray.join(', ')}>
		          {this.whichOne} 
		        </span>
		       	<input
			        type="checkbox"
			        checked={this.state.checked} />
		      </label>
		    </span>
			);
		}
	}
}