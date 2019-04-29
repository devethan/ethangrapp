import React from 'react';
import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';
import NavButton from '../components/NavButton';

const sharedRoutes = {
    Likes: {
        screen: LikeScreen,
        ...sharedOptions
    },
    Comments: {
        screen: CommentScreen
    }
};
const sharedOptions = {
    navigationOptions: {
        headerLeft: props => (
            <NavButton {...props} iconName={"ios-arrow-back"} />
        ),
        headerStyle: {
            backgroundColor: '#FBFBFB'
        },
        headerBackTitle: null
    }
};

export {sharedOptions};

export default sharedRoutes;