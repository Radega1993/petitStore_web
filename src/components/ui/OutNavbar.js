import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const OutNavbar = () => {

    return (
        <nav className="navbar navbar-expand-sm navbar-dark navbar__main">

            <Link
                className="navbar-brand navbar__text"
                to="/"
            >
                <strong>PetitStore</strong>
            </Link>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <div className="navbar-nav ml-auto navbar__img">

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link navbar__text"
                        exact
                        to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link navbar__text"
                        exact
                        to="/login"
                    >
                        Login
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
