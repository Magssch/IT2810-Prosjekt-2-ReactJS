import React, { Component } from 'react';
import './App.css';
import Dice from './Components/Dice';
import Menu from './Components/Menu';
import Sidenav from './Components/Sidenav';


class App extends Component {

    state = {
        diceVal: 1,
        sidenavExpanded: "",
        menuClicked: "",
    }

    onRoll = () => {
        this.setState({
            diceVal: Math.floor(Math.random()*6)+1
        })
    };

    sidenavExpand = () => {
        if(this.state.sidenavExpanded === "") {
            this.setState({
                sidenavExpanded: "expand",
                menuClicked: "change"
            })
        } else {
            this.setState({
                sidenavExpanded: "",
                menuClicked: ""
            })
        }
    };
    sidenavClose = () => {
        if(!(this.state.sidenavExpanded === "")) {
            this.setState({
                sidenavExpanded: "",
                menuClicked: ""
            })
        }
    };


  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Lorem Ipsum</h1>
            <Menu onClick={this.sidenavExpand} value={this.state.menuClicked}/>
        </header>
          <Sidenav value={this.state.sidenavExpanded}/>
        <div className="container" onClick={this.sidenavClose}>
        <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    );
  }
}
/*
  <Dice value={this.state.diceVal}/>
   <button onClick={this.onRoll}>Roll</button>*/

export default App;
