import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
     <nav class="nav-wrapper grey darken-3">
        <div class="container">
            <Link to='/' className="brand-logo"> TCN</Link>
        </div>
     </nav>
    )
}

export default Navbar