import React, { Component } from 'react';
import './App.css';
import Menu from './Components/Menu';
import Tabs from './Components/Tabs';
import Tab from './Components/Tabs/Tab';
import Sidenav from './Components/Sidenav';
import Content from './Components/Content';



class App extends Component {

    constructor(props) {
        super(props);
        this.categoryChange = this.categoryChange.bind(this);
    }
    state = {
        // Holder orden på state til sidepanel og hamburgermeny.
        sidenavExpanded: "",
        menuClicked: "",
        tab: 1,

        // Holder orden på de forskjellige kategoriene og state til disse.
        categories: [
            {
                id: 1,
                name: "Images",
                options: [
                    {
                        id: 1,
                        name: "chairs",
                        text: "Chairs",
                        checked: true
                    },
                    {
                        id: 2,
                        name: "lamps",
                        text: "Lamps",
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
                name: "Audio",
                options: [
                    {
                        id: 1,
                        name: "folk",
                        text: "Folk Instruments",
                        checked: true
                    },
                    {
                        id: 2,
                        name: "string",
                        text: "String Instruments",
                        checked: false
                    },
                    {
                        id: 3,
                        name: "blow",
                        text: "Wind Instruments",
                        checked: false
                    },
                ]
            },
            {
                id: 3,
                name: "Text",
                options: [
                    {
                        id: 1,
                        name: "cites",
                        text: "Quotes",
                        checked: true
                    },
                    {
                        id: 2,
                        name: "lyrics",
                        text: "Lyrics",
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
    };

    // Åpner sidepanel hvis det er lukket og omvendt hvis ikke. Kjøres kun når Menu-komponenten trykkes på.
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

    // Denne kjøres hvis sidepanelet er åpnet og brukeren trykker på et vilkårlig sted på siden. Lukker sidepanelet.
    sidenavClose = () => {
        if(!(this.state.sidenavExpanded === "")) {
            this.setState({
                sidenavExpanded: "",
                menuClicked: ""
            })
        }
    };

    // Kjøres når App.js mottar beskjed om at en checkbox er trykket på, oppdaterer til riktig state.
    categoryChange(category) {
        let temp = this.state.categories;
        temp[category.id - 1].options.forEach(o => o.checked = false);
        temp[category.id - 1].options[category.option.id - 1].checked = category.option.checked;

        this.setState({
            category: temp,
        });
    }

    /* Kalles hver gang brukeren velger en ny tab og oppdaterer
       hvilken tab som er aktiv. */
    updateTabs = (tab) => {
        let activeTab = parseInt(tab.slice(-1), 10);
        if (this.state.tab !== activeTab) this.setState({tab: activeTab});
    }

    // Disse funksjonene henter ut state til kategori-valgene som er valgt og sender til content.
    getCategories() {
        return [this.state.categories[0].options.filter(option => option.checked),
            this.state.categories[1].options.filter(option => option.checked),
            this.state.categories[2].options.filter(option => option.checked)];
    }
    getText() {
        return this.getCategories()[2][0];
    }
    getImg() {
        return this.getCategories()[0][0];
    }
    getAud() {
        return this.getCategories()[1][0];
    }

    render() {
    return (
      <div className="App">
          <Sidenav value={this.state.sidenavExpanded} categories={this.state.categories} handleChange={this.categoryChange}/>
          <div className="page" onClick={this.sidenavClose}>
              <header className="header">
                <h1 className="title">Personified Art</h1>
              </header>
              <Menu onClick={this.sidenavExpand} value={this.state.menuClicked} />
              <div className="tabs-container">
                  <Tabs onClick={this.updateTabs}>
                      <Tab label="1" />
                      <Tab label="2" />
                      <Tab label="3" />
                      <Tab label="4" />
                  </Tabs>
              </div>
              <div className="content">
                <Content
                        tabIndex={this.state.tab}
                        text={this.getText()}
                        img={this.getImg()}
                        aud={this.getAud()}
                />
              </div>
          </div>
        </div>
    );
  }
}
export default App;
