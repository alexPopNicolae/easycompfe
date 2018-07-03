import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  componentDidMount() {
   this.props.dispatch({type:'MERGE'});
  }

  render() {

    console.log('Haide sa vedem care este stateul');
    console.log(this.props);

    return (
      <div>
        <h1>Easy Competition APP</h1>
        <h2>This is the easy competition app the front end side</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);
