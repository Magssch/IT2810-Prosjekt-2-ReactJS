import React, { Component } from 'react';
import './App.css';
import Dice from './Components/Dice';
import Menu from './Components/Menu';
import Tabs from './Components/Tabs';
import Sidenav from './Components/Sidenav';



class App extends Component {

    constructor(props) {
        super(props);
        this.categoryChange = this.categoryChange.bind(this);
    }

    state = {
        diceVal: 1,
        sidenavExpanded: "",
        menuClicked: "",

        categories: [
            {
                id: 1,
                name: "Bilder",
                options: [
                    {
                        id: 1,
                        name: "chairs",
                        text: "Stoler",
                        checked: true
                    },
                    {
                        id: 2,
                        name: "lamps",
                        text: "Lamper",
                        checked: false
                    },
                    {
                        id: 3,
                        name: "pokemon",
                        text: "Pokémon",
                        checked: false
                    },
                ]
            },
            {
                id: 2,
                name: "Lyd",
                options: [
                    {
                        id: 1,
                        name: "folk",
                        text: "Folkeinstrumenter",
                        checked: true
                    },
                    {
                        id: 2,
                        name: "string",
                        text: "Strenginstrumenter",
                        checked: false
                    },
                    {
                        id: 3,
                        name: "blow",
                        text: "Blåseinstrumenter",
                        checked: false
                    },
                ]
            },
            {
                id: 3,
                name: "Tekst",
                options: [
                    {
                        id: 1,
                        name: "cites",
                        text: "Sitater",
                        checked: true
                    },
                    {
                        id: 2,
                        name: "lyrics",
                        text: "Sangtekster",
                        checked: false
                    },
                    {
                        id: 3,
                        name: "limericks",
                        text: "Limericks",
                        checked: false
                    },
                ]
            },
        ]
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

    categoryChange(category) {
        let temp = this.state.categories;
        temp[category.id - 1].options.forEach(o => o.checked = false);
        temp[category.id - 1].options[category.option.id - 1].checked = category.option.checked;

        this.setState({
            category: temp,
        });

        console.log(this.state.categories);
        console.log(temp);
    }


  render() {
    return (
      <div className="App">
          <Sidenav value={this.state.sidenavExpanded} categories={this.state.categories} handleChange={this.categoryChange}/>
          <div className="page" onClick={this.sidenavClose}>
          <header className="header">
          <h1 className="title">Lorem Ipsum</h1>
              <Menu onClick={this.sidenavExpand} value={this.state.menuClicked}/>
        </header>

              <div className="tabs-container">
                  <Tabs>
                      <div label="Tab1">Lorem Ipsum</div>
                      <div label="Tab2">dolor sit</div>
                      <div label="Tab3">amet, consectuvet</div>
                      <div label="Tab4"><Dice value={this.state.diceVal}/><button onClick={this.onRoll}>Roll</button></div>
                  </Tabs>
              </div>

              <div className="container">
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
      </div>
    );
  }
}


export default App;
