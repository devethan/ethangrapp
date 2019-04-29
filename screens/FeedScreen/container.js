import React from 'react';
import FeedScreen from './presenter';

class Container extends React.Component {
    render() {
        return <FeedScreen {...this.props} />
    }
}

export default Container;