import LikeScreen from '../screens/LikeScreen';
import CommentScreen from '../screens/CommentScreen';

const sharedRoutes = {
    Likes: {
        screen: LikeScreen
    },
    Comments: {
        screen: CommentScreen
    }
};
const sharedOptions = {};

export {sharedOptions};

export default sharedRoutes;