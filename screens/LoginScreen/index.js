import { connect } from "react-redux";
import Container from "./container";
import { actionCreator as userActions } from "../../redux/modules/user";

const mapStateToProps = state => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
        return dispatch(userActions.login(username, password))
    },
    fbLogin: () => {
      return dispatch(userActions.fbLogin())
    }
  };
};

export default connect(null, mapDispatchToProps)(Container);
