import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export const Navbar = () => {

    return (
      <nav className="navbar navbar-expand-sm navbar-dark navbar__main">

        <Link
            className="navbar-brand navbar__text"
            to="/"
        >
            <strong>PetitStore</strong>
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav ml-auto navbar__img">

                <NavLink
                    activeClassName="active"
                    className="nav-item nav-link navbar__text"
                    exact
                    to="/main"
                >
                    Home
                </NavLink>
            </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-info navbar__text-logout" >
                Raül
              </span>
              <NavLink
                activeClassName="active"
                className="nav-item nav-link navbar__text-logout"
                exact
                to="/login"
              >
                Logout
              </NavLink>
            </ul>
        </div>
    </nav>
  )
}
