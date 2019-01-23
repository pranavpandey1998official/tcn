import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import Signin from './signIn/Signin';
import Signup from './signUp/Signup';

const LogOut = () =>{
    return(
        <React.Fragment>
            <Route path = '/' component={ Navbar } ></Route>
            <Switch>
                <Route exact path ='/' component = { Home }></Route>
                <Route path = '/signIn' component = { Signin }></Route>
                <Route path = '/signUp' component = { Signup }></Route>
            </Switch>
        </React.Fragment>
    )
}

export default LogOut
