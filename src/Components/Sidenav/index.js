import React, { Component } from 'react'
import './sidenav.css';
import Checkbox from './Checkbox';

class Sidenav extends Component {

    render() {
        return (
            <div className={`sidenav ${this.props.value}`}>
                <h3>Bilder</h3>
                    <Checkbox text="Stoler" category="images" value="chairs" checked={true}/>
                    <Checkbox text="Lamper" category="images" value="lamps"/>
                    <Checkbox text="Pokémon" category="images" value="pokemon"/>
                <h3>Lyd</h3>
                    <Checkbox text="Folkeinstrumenter" category="audio" value="folk" checked={true}/>
                    <Checkbox text="Strenginstrumenter" category="audio" value="string"/>
                    <Checkbox text="Blåseinstrumenter" category="audio" value="blow"/>
                <h3>Tekst</h3>
                    <Checkbox text="Sitater" category="text" value="cites" checked={true}/>
                    <Checkbox text="Sangtekster" category="text" value="lyrics"/>
                    <Checkbox text="Limericks" category="text" value="limericks"/>
            </div>
        );
    }
}

export default Sidenav;
