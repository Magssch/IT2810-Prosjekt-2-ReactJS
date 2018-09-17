import React from 'react';

class Tab extends React.component {
    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        label: this.propTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    };
}




export default Tab;