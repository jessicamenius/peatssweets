import React from 'react'

function Navbar() {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Peat's Sweets</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="cookies.html">Cookies</a></li>
                        <li><a href="orders.html">Orders</a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="cookies.html">Cookies</a></li>
                    <li><a href="orders.html">Orders</a></li>
            </ul>
        </div>
    )
}

export default Navbar
