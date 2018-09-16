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
          <Sidenav value={this.state.sidenavExpanded}/>
          <div className="page" onClick={this.sidenavClose}>
          <header className="header">
          <h1 className="title">Lorem Ipsum</h1>
            </header>
              <Menu onClick={this.sidenavExpand} value={this.state.menuClicked}/>
            <div className="content">
                <p>Lorem ipsum dolor sit amet</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi dolor, vulputate nec fermentum quis, laoreet vitae ipsum. Ut lobortis neque congue auctor aliquam. Ut quis quam et magna tincidunt porttitor. Vivamus vitae nisi molestie, congue diam in, vehicula felis. In suscipit tristique mauris eget vulputate. Proin rutrum neque non lacus dignissim, at pulvinar diam molestie. Sed vehicula sed lectus sed rhoncus. Donec posuere vestibulum purus non condimentum. Aenean et fermentum ligula. Suspendisse consequat volutpat velit, vitae mattis nisl tincidunt nec. Nunc pretium venenatis purus at faucibus. Morbi ac sapien enim. Curabitur rutrum metus ut pretium venenatis. Vestibulum at ullamcorper elit, consectetur mattis nibh.

                    Donec viverra diam a sodales venenatis. Suspendisse potenti. Fusce condimentum id felis nec sollicitudin. Vivamus efficitur nulla blandit felis sodales, sed laoreet libero iaculis. Aliquam gravida interdum mauris. Sed feugiat hendrerit eleifend. Praesent et libero ac justo efficitur venenatis vitae tempor sapien. Duis risus felis, varius nec fringilla eu, hendrerit at libero.

                    Cras vitae sapien felis. In malesuada efficitur arcu vitae pulvinar. Nam vehicula urna nibh, vitae posuere libero vulputate nec. Aliquam erat volutpat. Proin et lectus ipsum. Vivamus imperdiet luctus urna, ac vulputate sem efficitur ut. Vestibulum ac turpis lectus. Etiam hendrerit ornare lacus, sit amet tincidunt magna auctor sed. In mi ipsum, tincidunt vel rutrum quis, lacinia eu nulla. Praesent at erat in diam gravida posuere. Quisque dictum sollicitudin hendrerit. Phasellus fringilla iaculis leo, non imperdiet erat suscipit eget. Donec ac risus suscipit, ultricies metus vel, pulvinar diam. Nunc tincidunt nibh ut metus maximus ornare.

                    Sed elementum ipsum ac neque accumsan faucibus. Mauris a dapibus erat. Sed sed est vitae ligula aliquam consectetur. Donec cursus, augue at sollicitudin commodo, velit lacus aliquam mauris, vitae bibendum lorem magna id nulla. Ut tempus velit eget libero imperdiet, ac dictum dui bibendum. Nunc pretium in libero eu varius. Donec ut metus vitae risus blandit laoreet eget eget nisi. Cras quam justo, vestibulum eget aliquet feugiat, faucibus vitae lorem.

                    Sed et euismod ex, sit amet euismod turpis. Cras malesuada tristique nisl, eget cursus elit. Vestibulum dictum velit at mauris sollicitudin, at pretium libero fringilla. Aenean et lacinia ex. Ut laoreet tortor id neque convallis consectetur. Etiam venenatis, neque ut condimentum suscipit, urna purus pharetra augue, ultrices scelerisque ex orci non eros. Phasellus sit amet odio quis ligula consectetur tristique eget quis nibh. Pellentesque ut diam in quam aliquet elementum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi dolor, vulputate nec fermentum quis, laoreet vitae ipsum. Ut lobortis neque congue auctor aliquam. Ut quis quam et magna tincidunt porttitor. Vivamus vitae nisi molestie, congue diam in, vehicula felis. In suscipit tristique mauris eget vulputate. Proin rutrum neque non lacus dignissim, at pulvinar diam molestie. Sed vehicula sed lectus sed rhoncus. Donec posuere vestibulum purus non condimentum. Aenean et fermentum ligula. Suspendisse consequat volutpat velit, vitae mattis nisl tincidunt nec. Nunc pretium venenatis purus at faucibus. Morbi ac sapien enim. Curabitur rutrum metus ut pretium venenatis. Vestibulum at ullamcorper elit, consectetur mattis nibh.

                    Donec viverra diam a sodales venenatis. Suspendisse potenti. Fusce condimentum id felis nec sollicitudin. Vivamus efficitur nulla blandit felis sodales, sed laoreet libero iaculis. Aliquam gravida interdum mauris. Sed feugiat hendrerit eleifend. Praesent et libero ac justo efficitur venenatis vitae tempor sapien. Duis risus felis, varius nec fringilla eu, hendrerit at libero.

                    Cras vitae sapien felis. In malesuada efficitur arcu vitae pulvinar. Nam vehicula urna nibh, vitae posuere libero vulputate nec. Aliquam erat volutpat. Proin et lectus ipsum. Vivamus imperdiet luctus urna, ac vulputate sem efficitur ut. Vestibulum ac turpis lectus. Etiam hendrerit ornare lacus, sit amet tincidunt magna auctor sed. In mi ipsum, tincidunt vel rutrum quis, lacinia eu nulla. Praesent at erat in diam gravida posuere. Quisque dictum sollicitudin hendrerit. Phasellus fringilla iaculis leo, non imperdiet erat suscipit eget. Donec ac risus suscipit, ultricies metus vel, pulvinar diam. Nunc tincidunt nibh ut metus maximus ornare.

                    Sed elementum ipsum ac neque accumsan faucibus. Mauris a dapibus erat. Sed sed est vitae ligula aliquam consectetur. Donec cursus, augue at sollicitudin commodo, velit lacus aliquam mauris, vitae bibendum lorem magna id nulla. Ut tempus velit eget libero imperdiet, ac dictum dui bibendum. Nunc pretium in libero eu varius. Donec ut metus vitae risus blandit laoreet eget eget nisi. Cras quam justo, vestibulum eget aliquet feugiat, faucibus vitae lorem.

                    Sed et euismod ex, sit amet euismod turpis. Cras malesuada tristique nisl, eget cursus elit. Vestibulum dictum velit at mauris sollicitudin, at pretium libero fringilla. Aenean et lacinia ex. Ut laoreet tortor id neque convallis consectetur. Etiam venenatis, neque ut condimentum suscipit, urna purus pharetra augue, ultrices scelerisque ex orci non eros. Phasellus sit amet odio quis ligula consectetur tristique eget quis nibh. Pellentesque ut diam in quam aliquet elementum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas mi dolor, vulputate nec fermentum quis, laoreet vitae ipsum. Ut lobortis neque congue auctor aliquam. Ut quis quam et magna tincidunt porttitor. Vivamus vitae nisi molestie, congue diam in, vehicula felis. In suscipit tristique mauris eget vulputate. Proin rutrum neque non lacus dignissim, at pulvinar diam molestie. Sed vehicula sed lectus sed rhoncus. Donec posuere vestibulum purus non condimentum. Aenean et fermentum ligula. Suspendisse consequat volutpat velit, vitae mattis nisl tincidunt nec. Nunc pretium venenatis purus at faucibus. Morbi ac sapien enim. Curabitur rutrum metus ut pretium venenatis. Vestibulum at ullamcorper elit, consectetur mattis nibh.

                    Donec viverra diam a sodales venenatis. Suspendisse potenti. Fusce condimentum id felis nec sollicitudin. Vivamus efficitur nulla blandit felis sodales, sed laoreet libero iaculis. Aliquam gravida interdum mauris. Sed feugiat hendrerit eleifend. Praesent et libero ac justo efficitur venenatis vitae tempor sapien. Duis risus felis, varius nec fringilla eu, hendrerit at libero.

                    Cras vitae sapien felis. In malesuada efficitur arcu vitae pulvinar. Nam vehicula urna nibh, vitae posuere libero vulputate nec. Aliquam erat volutpat. Proin et lectus ipsum. Vivamus imperdiet luctus urna, ac vulputate sem efficitur ut. Vestibulum ac turpis lectus. Etiam hendrerit ornare lacus, sit amet tincidunt magna auctor sed. In mi ipsum, tincidunt vel rutrum quis, lacinia eu nulla. Praesent at erat in diam gravida posuere. Quisque dictum sollicitudin hendrerit. Phasellus fringilla iaculis leo, non imperdiet erat suscipit eget. Donec ac risus suscipit, ultricies metus vel, pulvinar diam. Nunc tincidunt nibh ut metus maximus ornare.

                    Sed elementum ipsum ac neque accumsan faucibus. Mauris a dapibus erat. Sed sed est vitae ligula aliquam consectetur. Donec cursus, augue at sollicitudin commodo, velit lacus aliquam mauris, vitae bibendum lorem magna id nulla. Ut tempus velit eget libero imperdiet, ac dictum dui bibendum. Nunc pretium in libero eu varius. Donec ut metus vitae risus blandit laoreet eget eget nisi. Cras quam justo, vestibulum eget aliquet feugiat, faucibus vitae lorem.

                    Sed et euismod ex, sit amet euismod turpis. Cras malesuada tristique nisl, eget cursus elit. Vestibulum dictum velit at mauris sollicitudin, at pretium libero fringilla. Aenean et lacinia ex. Ut laoreet tortor id neque convallis consectetur. Etiam venenatis, neque ut condimentum suscipit, urna purus pharetra augue, ultrices scelerisque ex orci non eros. Phasellus sit amet odio quis ligula consectetur tristique eget quis nibh. Pellentesque ut diam in quam aliquet elementum.</p>
            </div>
        </div>
      </div>
    );
  }
}
/*
  <Dice value={this.state.diceVal}/>
   <button onClick={this.onRoll}>Roll</button>*/

export default App;
