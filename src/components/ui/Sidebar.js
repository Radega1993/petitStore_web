import React from 'react';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {

    return (

      <div className="wrapper flex-column col-xs-8 ">
        <nav className="sidebar ml-auto animate__animated animate__bounceInRight">

          <ul className="list-unstyled components mt-5">
            <li className="active">
              <NavLink
                activeclass="active"
                className="nav-item nav-link media-body"
                exact
                to="/"
              >
                <i className="fas fa-user"></i>
                <span className="media-body"> View Profile</span>
              </NavLink>
            </li>
            <li className="mt-3">
              <NavLink
                activeclass="active"
                className="nav-item nav-link media-body"
                exact
                to="/"
              >
                <i className="fas fa-cog"></i>
                <span className="media-body"> Settings</span>
              </NavLink>
            </li>
            <li className="mt-2">
              <NavLink
                activeclass="active"
                className="nav-item nav-link media-body"
                exact
                to="/login"
              >
                <i className="fas fa-sign-out-alt"></i>
                <span className="media-body"> Logout</span>
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>

  )
}
