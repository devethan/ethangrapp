import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photos";

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const {
    photos: { feed }
  } = state;
  return {
    feed
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getEmptySearch: () => {
      dispatch(photoActions.getSearch());
    },
    searchByHashtag: hashtag => {
      dispatch(photoActions.searchByHashtag(hashtag));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
