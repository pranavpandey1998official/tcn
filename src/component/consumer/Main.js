import React from 'react';
import SideNav from './SideNav/SideNav';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import MyOrder from './MyOrder/MyOrder';
import Profile from './Profile/Profile';
import CreateOrder from './CreateOrder/CreateOrder';
import M from 'materialize-css';
class Main extends React.Component {
    componentDidMount(){
        var elems = document.querySelectorAll('.sidenav');
         M.Sidenav.init(elems);
    }
    style = {
        root:{

        }

    }
    render(){
        return <div className="main">
                <Route path = '/' component={ SideNav } ></Route>
                <Switch>
                    <Route exact path ='/' component = { Home }></Route>
                    <Route path = '/order' component = { MyOrder }></Route>
                    <Route path = '/profile' component = { Profile }></Route>
                    <Route path = '/createOrder/:crop' component = { CreateOrder }></Route>
                </Switch>
            </div>
    }
}

export default Main;