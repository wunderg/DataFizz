import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navigation from '../navbar/navbar.js';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <Navigation />
        <div className="container">
          { this.props.children }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

function mapStateToProps(state) {
  return {
  };
}


export default connect(mapStateToProps, {})(App);
