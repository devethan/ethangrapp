import React, { Component } from 'react'
import Photo from './presenter';

class Container extends Component {
  render() {
    return <Photo {...this.props} />
  }
}

export default Container;