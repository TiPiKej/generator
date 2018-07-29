import React, {Component} from 'react';
import './css/inputStyles.css';
import './css/divsStyles.css';

export class Password extends Component{
	render(){
		return(
			<div className="divsStyles">
        <p>Hasło: </p>
        <input
          className="inputStyles"
          type="text"
          value={this.props.password}
          readOnly="true" />
      </div>
		);
	}
}