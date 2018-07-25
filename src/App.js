import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      counts: 8,
      password: '',
      special: true,
      numbers: true,
      letters: true,

      lettersArray: [
        'a','b','c',
        'd','e','f',
        'g','h','i',
        'j','k','l',
        'm','n','o',
        'p','q','r',
        's','t','u',
        'v','w','x',
        'y','z'
      ],

      specialArray: [
        '!', '"', '\'',
        '#', '$', '%',
        '&', '(', ')',
        '*', '+', '-',
        ',', '.', '/',
        ':', ';', '<',
        '=', '>', '?',
        '@', '[', '\\',
        ']', '^', '_',
        '`', '{', '|',
        '}'
      ]
    }
  }

  changingCounts = ({currentTarget}, typ) => {
    switch(currentTarget.type){
      case 'number':
        this.setState({
          counts: ((currentTarget.value >= 6) && (currentTarget.value <= 36))? currentTarget.value : this.state.counts
        });
        break;
     
      case 'checkbox':
        
        this.setState({[typ]: this.state[typ]? false: true})

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
    const appStyles = {
      display: 'flex',
      justifyContent: 'space-around',
      flexDirection: 'row'
    }

    const divsStyles = {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    }

    const inputStyles = {
      lineHeight: '1.5em',
      height: '1.5em',
      width: '250px'
    }

    const infoStyles = {
      textDecoration: 'none',
      color: '#000',
      cursor: 'default'
    }

    return (
      <div className="App" style={appStyles}>
        <div style={divsStyles}>
          <p>Ile liczb: </p>
          <input
            style={inputStyles}
            type="number"
            value={this.state.counts}
            onChange={this.changingCounts} />
          
          <span>
            <a
              href="#"
              style={infoStyles}
              title={this.state.specialArray.join(', ')}>
              Znaki specjalne: 
            </a>
            <input
              type="checkbox"
              checked={this.state.special}
              onChange={el => this.changingCounts(el, 'special')} />  
          </span>
          
          <span>
            <a
              href="#"
              style={infoStyles}
              title={[0,1,2,3,4,5,6,7,8,9].join(', ')}>
              Cyfry: 
            </a>
            <input
              type="checkbox"
              checked={this.state.numbers}
              onChange={el => this.changingCounts(el, 'numbers')} />  
          </span>
          
          <span>
            <a
              href="#"
              style={infoStyles}
              title={this.state.lettersArray.join(', ')}>
              Litery: 
            </a>
            <input
              type="checkbox"
              checked={this.state.letters}
              onChange={el => this.changingCounts(el, 'letters')} />  
          </span>
          
          <button onClick={this.password}>
            Generuj hasło
          </button>
        </div>
        <div style={divsStyles}>
          <p>Hasło: </p>
          <input
            style={inputStyles}
            type="text"
            value={this.state.password}
            readOnly="true" />
        </div>
      </div>
    );
  }
}

export default App;
