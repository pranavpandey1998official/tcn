import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <React.Fragment>
     <nav className="nav-wrapper grey darken-3">
        <div className="container">
            
            <Link to='/' className="brand-logo"> TCN</Link>
            <a href="" className="sidenav-trigger" data-target="mobile-links">
                <i className="material-icons">menu</i>
            </a>

            <ul className="right hide-on-med-and-down ">
                <li > <Link to='/signup' >Signup</Link> </li>
                <li > <Link to='/signin' >Signin</Link> </li>
                <li className="push-l3">
                    <a href="#" className="btn-floating btn-small indigo">
                        <i className="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="btn-floating btn-small indigo">
                        <i className="fa fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a href="#" className="btn-floating btn-small indigo">
                        <i className="fa fa-twitter"></i>
                    </a>
                </li>
            </ul>

        </div>
     </nav>

     <ul className="sidenav" id="mobile-links">
        <li > <Link to='/signup' >Signup</Link> </li>
        <li > <Link to='/signin' >Signin</Link> </li>
     </ul>

     </React.Fragment>
    
    )
}

export default Navbar