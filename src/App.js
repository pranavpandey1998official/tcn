import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import SupplierMain from './component/supplier/Main';
import ConsumerMain from './component/consumer/Main';
import LogOut from './component/logOut/logOut';
import {connect } from 'react-redux'
import { withRouter } from "react-router";
import Loading from './loading/Loading'
class App extends Component {

  componentWillReceiveProps(nextProps){
    if(nextProps.auth!==this.props.auth){
      this.props.history.push('/')
    }
  }
  render() {
    const { auth,profile } = this.props;
    console.log(this.props)
    var link ={}
    if(auth.uid==null){
      link = <LogOut/>
    }
    else if(auth.uid==null||this.props.profile.isEmpty){
      link=<Loading />
    }
    else{
      link=profile.type=="consumer" ?<ConsumerMain />:<SupplierMain />
    }
    return (
          <div className="App">
            { link }
          </div>
        
    );
  }
}

var mapStateToProps = (state) => {
  return {
    auth :state.firebase.auth,
    profile:state.firebase.profile,
  }
}

export default 
withRouter(connect(mapStateToProps)(App));
