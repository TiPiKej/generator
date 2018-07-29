import React, {Component} from 'react';
import { divsStyles, inputStyles } from './styles';

export class Password extends Component{
	render(){
		return(
			<div style={divsStyles}>
        <p>Hasło: </p>
        <input
          style={inputStyles}
          type="text"
          value={this.props.password}
          readOnly="true" />
      </div>
		);
	}
}