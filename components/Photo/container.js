import React, { Component } from "react";
import Photo from "./presenter";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: props.is_Liked,
      likeCount: props.like_count
    };
  }
  render() {
    return (
      <Photo {...this.props} {...this.state} handlePress={this._handlePress} />
    );
  }
  _handlePress = async () => {
    const { dispatchLike } = this.props;
    const { isLiked } = this.state;
    dispatchLike(isLiked);
    if (isLiked) {
      this.setState(prevState => {
        return {
          isLiked: false,
          likeCount: prevState.likeCount - 1
        };
      });
    } else {
      this.setState(prevState => {
        return {
          isLiked: true,
          likeCount: prevState.likeCount + 1
        };
      });
    }
    // const result = await dispatchLike(isLiked);
    // if (result) {
    //   if (isLiked) {
    //     this.setState(prevState => {
    //       return {
    //         isLiked: false,
    //         likeCount: prevState.likeCount - 1
    //       };
    //     });
    //   } else {
    //     this.setState(prevState => {
    //       return {
    //         isLiked: true,
    //         likeCount: prevState.likeCount + 1
    //       };
    //     });
    //   }
    // }
  };
}

export default Container;
