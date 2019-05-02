import React from "react";
import SearchScreen from "./presenter";
import SearchBar from "../../components/SearchBar";

class Container extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      headerTitle: <SearchBar submit={text => params.submitSearch(text)} />
    };
  };
  state = {
    searchingBy: ""
  };
  componentWillMount() {
    const { navigation } = this.props;
    navigation.setParams({
      submitSearch: this._submitSearch
    });
  }
  render() {
    return <SearchScreen {...this.state} />;
  }
  _submitSearch = text => {
    const { searchingBy } = this.state;
    this.setState({
      searchingBy: text
    });
  };
}

export default Container;
