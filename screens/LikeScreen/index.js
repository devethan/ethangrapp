import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  const {
    photos: { userList }
  } = state;
  return {
    userList
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUserList: () => {
      const {
        navigation: {
          state: {
            params: { photoId }
          }
        }
      } = ownProps;
      dispatch(photoActions.getLikePhoto(photoId));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
