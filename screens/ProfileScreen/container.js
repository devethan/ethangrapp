import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import Profile from "../../components/Profile";
 
// presenter는 필요없다. presneter는 component / profile 이 된다. 


class Container extends Component {
    static propTypes = {
        profile: PropTypes.object.isRequired,
        getOwnProfile: PropTypes.func.isRequired
    };
    render() {
        const { profile, getOwnProfile } = this.props;
        return <Profile profileObject={profile} refresh={getOwnProfile} />;
    }
}

export default Container;