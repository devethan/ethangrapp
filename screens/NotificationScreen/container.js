import React from 'react';
import PropTypes from 'prop-types';
import NotificationsScreen from './presenter';

class Container extends React.Component {
    static propTypes = {
        feed: PropTypes.array.isRequired,
        getFeed: PropTypes.func.isRequired,
    }
    state = {
        isFetching: false
    }
    render() {
        return <NotificationsScreen {...this.props} {...this.state} refresh={this._refresh}/>
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.feed) {
            this.setState({
                isFetching: false
            })
        }
    }
    _refresh = () => {
        const {getFeed} = this.props;
        this.setState({
            isFetching: true
        })
        getFeed();
    }
}

export default Container;