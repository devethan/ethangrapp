import { connect } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Container from "./container";

const mapStateToProps = (state, ownProps) => {
    const { user: { profile } } = state;
    console.log(profile)
    return {
        profile
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getOwnProfile: () => {
            dispatch(userActions.getOwnProfile());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
