import React from 'react';

class Tab extends React.component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: this.propTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    onClick = () => {
        const { label, onClick} = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            }
        } = this;

        let className = 'tab-list-item';

        if (activeTab === label) {
            className += ' tab-list-active';
        }

        return (
            <li
            className = {className}
            onClick={onClick}
            >
            {label}
            </li>
        );
    }
}

export default Tab;