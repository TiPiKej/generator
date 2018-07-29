import React, { Component } from 'react';
import { lettersArray, specialArray, numbersArray } from './arrays';
import { Password } from './Password';
import { Inputy } from './Inputy';
import { appStyles, divsStyles } from './styles';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      counts: 8,
      password: '',
      special: true,
      numbers: true,
      letters: true,

      lettersArray,

      specialArray,

      numbersArray
    }
  }

  changingCounts = ({currentTarget}, typ) => {
    switch(currentTarget.type){
      case 'number':
        if(currentTarget.value < 6){
          console.log('dsas')
          console.log(currentTarget.validationMessage);
        }

        this.setState({
          counts: ((currentTarget.value >= 1) && (currentTarget.value <= 36))? currentTarget.value : this.state.counts
        });
        break;

      default:

        this.setState({
          [typ]: this.state[typ]? false: true
        })

        break;
    }
  }

  password = () => {
    let collection = [];

    if(this.state.letters) {
      Array.from(this.state.lettersArray).forEach(el => collection.push(el));
      Array.from(this.state.lettersArray).forEach(el => collection.push(el.toUpperCase()));
    }
    if(this.state.numbers) for(let i = 0; i <= 9; i++) collection.push(i);
    if(this.state.special) Array.from(this.state.specialArray).forEach(el => collection.push(el));
    
    let password = '';
    for(let i = 1; i <= this.state.counts; i++){
      const random = Math.floor(Math.random() * collection.length);
      password += collection[random] === undefined? "Brak Danych " : collection[random];
    }
    this.setState({password});
  }

  render() {
    return (
      <div className="App" style={appStyles}>
        <div style={divsStyles}>
          <Inputy 
            counts={this.state.counts}
            changingCounts={this.changingCounts}/>


          <Inputy 
            whichOne="special"
            thisArray={this.state.specialArray}
            checkedArray={this.state.special}
            changingCounts={this.changingCounts}/>
          
          <Inputy 
            whichOne="numbers"
            thisArray={this.state.numbersArray}
            checkedArray={this.state.numbers}
            changingCounts={this.changingCounts}/>
          
          <Inputy 
            whichOne="letters"
            thisArray={this.state.lettersArray}
            checkedArray={this.state.letters}
            changingCounts={this.changingCounts}/>
          
          <button onClick={this.password}>
            Generuj hasło
          </button>
        </div>

        <Password  
          password={this.state.password}/>
      </div>
    );
  }
}