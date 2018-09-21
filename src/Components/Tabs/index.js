import React, { Component } from 'react';
import Tab from './Tab';
import './tabs.css'

/* Tabs komponenten viser en liste av alle tabsene og
   holder styr på hvilken tab som er aktiv (trykket ned) */
class Tabs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({ activeTab: tab });
        this.props.onClick(tab);
    }

    render() {
        const { onClickTabItem,
            props: {
                children,
            },
            state: {
                activeTab,
            }
        } = this;

        return (
            <div className="tabs" >
                <ol className="tab-list">
                    {children.map((child) => {
                        const { label } = child.props;

                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={onClickTabItem}
                            />
                        );
                    })}
                </ol>
            </div>
        );
    }
}

export default Tabs;