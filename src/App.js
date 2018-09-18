import React, { Component } from 'react';
import './App.css';
import Dice from './Components/Dice';
import Menu from './Components/Menu';
import Tabs from './Components/Tabs';


class App extends Component {

    state = {
        diceVal: 1,
    }

    onRoll = () => {
        this.setState({
            diceVal: Math.floor(Math.random()*6)+1
        })
    };

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Lorem Ipsum</h1>
            <Menu/>
        </header>
          <div>
              <Tabs>
                  <div label="Tab1">
                      Lorem Ipsum
                  </div>
                  <div label="Tab2">
                      dolor sit
                  </div>
                  <div label="Tab3">
                      amet, consectuvet
                  </div>
                  <div label="Tab4">
                      adipiscing elit
                  </div>
              </Tabs>
          </div>
        <div className="container">
          <Dice value={this.state.diceVal}/>
            <button onClick={this.onRoll}>Roll</button>
        </div>
      </div>
    );
  }
}

export default App;
