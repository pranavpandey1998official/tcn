import React from 'react';
import SideNav from './SideNav/SideNav';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Orders from './Orders/Orders';
import Shipments from './Shipments/Shipments';
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
                    <Route path = '/order' component = { Orders}></Route>
                    <Route path = '/shipement' component = { Shipments }></Route>
                </Switch>
            </div>
    }
}

export default Main;