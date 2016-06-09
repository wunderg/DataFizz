import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <div className="container">
          <h1> 1Hello world12 </h1>
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
