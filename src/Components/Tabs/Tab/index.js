import React, { Component } from 'react';
import './tab.css'

/* Tab komponenten viser navnet på taben, og legger til en
   ekstra klasse hvis taben er aktiv. Når taben trykkes ned,
   varsler den Tabs-komponenten om hvilken tab som skal settes
   til å være aktiv. */

class Tab extends Component {

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
                className={className}
                onClick={onClick}
            >
                {this.props.label}
            </li>
        );
    }
}

export default Tab;