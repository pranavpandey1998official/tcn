import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../../Store/actions/authAction';
import Logo from '../logo'
const SideNav = (props) =>{
    
    return(
        <React.Fragment>
            <ul id="slide-out" className="sidenav sidenav-fixed">
                <li >
                    <div className="card-content">
                        <Logo />
                    </div>
                </li>
                <li > 
                    <Link to='/'>
                        <span>Home </span>
                        <i className="material-icons left  "> home </i> 
                    </Link>
                    
                </li>
                <li>
                    <Link to='/shipment'>
                        <span>My Shipments </span>
                        <i className="material-icons left  "> shopping_cart </i> 
                    </Link>
                </li>
                <li>
                    <Link to='/profile'>
                        <span>Profile </span>
                        <i className="material-icons left  "> face </i> 
                    </Link>
                    
                </li>
                <li>
                    <Link to='/' onClick={props.signOut}>
                        <span>LogOut </span>
                        <i className="material-icons left  "> lock </i> 
                    </Link>    
                </li>
            </ul>
            <a href="" data-target="slide-out" className="hide-on-large-only sidenav-trigger"><i className="material-icons">menu</i></a>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }

}
export default connect(null,mapDispatchToProps)(SideNav);