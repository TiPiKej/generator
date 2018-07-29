import React, {Component} from 'react';
import './css/inputStyles.css';
import './css/divsStyles.css';
import { connect } from "react-redux";

export class PasswordClass extends Component{
  constructor(props){
    super(props);
    this.state = {
      password: props.password,
      lang: 'pl'
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps.lang !== this.props.lang) this.setState({lang: this.props.lang});

    if(prevProps.password !== this.props.password) this.setState({password: this.props.password});
  }

	render(){
		return(
			<div className="divsStyles">
        <p className="title">
          {this.state.lang === 'pl'?(
            "Hasło"
          ):(
            "Password"
          )}: </p>
        <textarea
          className="inputStyles"
          type="text"
          value={this.state.password}
          readOnly="true">
        </textarea>
        <button
          className="buttonClipboard"
          onClick={this.props.copy}>
          {this.state.lang === 'pl'?(
            "Kopiuj do schowka!"
          ):(
            "Copy to clipboard!"
          )}
        </button>
      </div>
		);
	}
}


const mapStateToProps = (state) => {
  return {
    lang: state.lang
  }
};

export const Password = connect(mapStateToProps)(PasswordClass);