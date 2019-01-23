import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Main from './component/signIn/Main';
import LogOut from './component/logOut/logOut';
import {connect } from 'react-redux'


class App extends Component {
  render() {
    const { auth } = this.props;

    const link = auth.uid ? <Main /> : <LogOut />
    return (
      
        <BrowserRouter> 
          <div className="App">
            { link }
          </div>
        </BrowserRouter>
    );
  }
}

var mapStateToProps = (state) => {
  return {
    auth :state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
