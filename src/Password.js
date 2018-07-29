import React, {Component} from 'react';
import './css/inputStyles.css';
import './css/divsStyles.css';

export class Password extends Component{
	render(){
		return(
			<div className="divsStyles">
        <p className="title">Hasło: </p>
        <textarea
          className="inputStyles"
          type="text"
          value={this.props.password}
          readOnly="true">
        </textarea>
        <button
          className="buttonClipboard"
          onClick={this.props.copy}>
          Kopiuj do schowka!
        </button>
      </div>
		);
	}
}