'use strict';

import React, { PropTypes } from 'react';
import { getWindowSize } from '../lib/utils';

class Canvas extends React.Component {

  constructor(props) {
    super(props);

    // Set the initial canvas size
    this.state = {
      width: 0,
      height: 0
    };
  }

  componentDidMount() {
    // Set the canvas size to the window size
    let wSize = getWindowSize();
    this.setState({width: wSize[0], height: wSize[1]});

    // Keep track of the canvas size when resizing
    window.addEventListener('resize', () => {
      let wSize = getWindowSize();
      this.setState({width: wSize[0], height: wSize[1]});
    });
  }

  render () {
    const {width, height} = this.state;

    return (
      <div className="canvas" style={{width, height}}></div>
    );
  }
}

export default Canvas;
