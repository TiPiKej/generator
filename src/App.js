import React, { Component } from 'react';
import { Password } from './Password';
import { Inputy } from './Inputy';
import { clipboard, changingCounts, passwordFunction } from './Functions';
import './css/App.css';
import './css/divsStyles.css';
import { changeLang } from "./actions/";
import { connect } from "react-redux";

export class App extends Component {
  constructor(){
    super();

    this.state = {
      lang: "pl",
      limit: {
        min: 1,
        max: 36
      },
      counts: 8,
      password: '',
      special: true,
      numbers: true,
      letters: true,
      extra: []
    }
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.lang !== this.props.lang) this.setState({lang: this.props.lang})
  }

  changingCounts = ({currentTarget}, typ) => {
    let counts = this.state.counts;
    const limit = this.state.limit;

    if(currentTarget.className === "wraplabel"){
      this.setState({
        [typ]: this.state[typ]? false: true
      })
    }

    const currentCounts = changingCounts(currentTarget, typ, {counts, limit});

    this.setState({ counts: currentCounts });
  }

  password = () => {
    
    const password = passwordFunction({
      lang: this.state.lang,
      letters: this.state.letters,
      numbers: this.state.numbers,
      special: this.state.special,
      counts: this.state.counts,
      extraArray: this.state.extra
    });

    this.setState({password});
  }

  clipboard = ({currentTarget}) => {
    let children = currentTarget.parentNode.children,
        textarea = Array.from(children).filter(el => el.type === 'textarea'),
        pass;
        Array.from(textarea).forEach(el => {
          pass = el.value;
          el.select();
          document.execCommand('copy');
        });


    const tooltip = document.createElement('div');
          tooltip.className = 'tooltip';
          if(this.state.lang === 'pl') tooltip.innerHTML = `Skopiono do chowka: ${pass}`;
          else tooltip.innerHTML = `Copied to clipboard: ${pass}`;
          setTimeout(() => tooltip.style.opacity = 1, 10);
          setTimeout(() => {
            tooltip.style.opacity = 0;
            setTimeout(() => tooltip.remove(), 500);
          }, 3000);

    currentTarget.appendChild(tooltip)
  }

  changeLang = ({currentTarget}) => {
    let lang = this.state.lang;

    if(lang === 'pl') lang = 'en';
    else lang = 'pl';

    this.props.changeLang(lang)
  }

  changeExtraChar = (extraCharacters) => {
    const extra = Array.from(extraCharacters)
    this.setState({extra})
  }

  render() {
    return (
      <div className="App">
        <div className="divsStyles">
          <Inputy 
            counts={this.state.counts}
            changingCounts={this.changingCounts}/>


          <Inputy 
            whichOne="special"
            checkedArray={this.state.special}
            changingCounts={this.changingCounts}/>
          
          <Inputy 
            whichOne="numbers"
            checkedArray={this.state.numbers}
            changingCounts={this.changingCounts}/>
          
          <Inputy 
            whichOne="letters"
            checkedArray={this.state.letters}
            changingCounts={this.changingCounts}/>
          
          <Inputy
            whichOne="extra"
            onChangeValue={this.changeExtraChar}/>

          <button 
            className="passButton"
            onClick={this.password}>
            {this.state.lang === 'pl'?"Generuj hasło":"Random password"}
          </button>
        </div>

        <Password  
          password={this.state.password}
          copy={el => clipboard(el, this.state.lang)}/>

        <button 
          style={{
            width: '100px',
            lineHeight: '1.5em',
            height: '1.5em',
            position: 'absolute',
            top: '5px',
            right: '5px',
            cursor: 'pointer'
          }}
          onClick={this.changeLang}>
          {this.state.lang === 'pl'? "English": "Polski"}
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
const mapDispatchToProps = { changeLang };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);