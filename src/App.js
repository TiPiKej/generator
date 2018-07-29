import React, { Component } from 'react';
import { lettersArray, specialArray, numbersArray } from './arrays';
import { Password } from './Password';
import { Inputy } from './Inputy';
import './css/App.css';
import './css/divsStyles.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      limit: {
        min: 1,
        max: 36
      },
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
    let counts = this.state.counts;
    const limit = this.state.limit;
    switch(typ){
      case "up":
        counts++;
        /* turning on / off buttons */
        if(limit.max === counts){
          currentTarget.className += ' disable';
        }
        currentTarget.previousSibling.previousSibling.className = 'changingValue';

        /* changing value of text input */
        if(limit.max >= counts) this.setState({counts});
        break;

      case "down":
        counts--;
        
        /* turning on / off buttons */
        if(limit.min === counts){
          currentTarget.className += ' disable';
        }
        currentTarget.nextSibling.nextSibling.className = 'changingValue';
        /* changing value of text input */
        if(limit.min <= counts) this.setState({counts});
        break;

      default:
        switch(currentTarget.type){
          case 'text':
            const value = currentTarget.value;

            /* changing length of password */
            let counts = this.state.counts;
            if((value >= limit.min) && (value <= limit.max)) counts = value;
            else if( value < limit.min ) counts = limit.min;
            else if( value > limit.max ) counts = limit.max;


            /* turning on / off buttons */
            
            currentTarget.previousSibling.className = 'changingValue';
            currentTarget.nextSibling.className = 'changingValue';

            if(Number(counts) === Number(limit.min)){
              currentTarget.previousSibling.className += ' disable';
            }
            else if(Number(counts) === Number(limit.max)){
              currentTarget.nextSibling.className += ' disable';
            }


            this.setState({ counts });
            
            break;

          default:

            this.setState({
              [typ]: this.state[typ]? false: true
            })

            break;
        }
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
          tooltip.innerHTML = `Skopiono do chowka: ${pass}`;
          setTimeout(() => tooltip.style.opacity = 1, 10);
          setTimeout(() => {
            tooltip.style.opacity = 0,
            setTimeout(() => tooltip.remove(), 500);
          }, 3000);

    currentTarget.appendChild(tooltip)
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
          
          <button 
            className="passButton"
            onClick={this.password}>
            Generuj hasło
          </button>
        </div>

        <Password  
          password={this.state.password}
          copy={this.clipboard}/>
      </div>
    );
  }
}