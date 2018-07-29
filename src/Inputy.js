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

					<p className="title">Ile liczb: </p>

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