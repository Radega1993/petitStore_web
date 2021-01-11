import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Sidebar = () => {

    return (
      <div>

      <section id="pmd-main">

          <aside id="basicSidebar" className="pmd-sidebar bg-light pmd-z-depth" role="navigation">
              <ul className="nav flex-column pmd-sidebar-nav">
                  <li className="nav-item">
                      <a className="nav-link" href="/">
                          <i className="fas fa-user"></i>
                          <span className="media-body"> View Profile</span>
                      </a>
                  </li>
                  <div className="pmd-nav-item-divider"></div>
                  <li className="nav-item">
                      <a className="nav-link" href="/">
                          <i className="fas fa-cog"></i>
                          <span className="media-body"> Settings</span>
                      </a>
                  </li>
                  <li className="nav-item">

                    <NavLink
                      activeClassName="active"
                      className="nav-item nav-link media-body"
                      exact
                      to="/login"
                    >
                      <i className="fas fa-sign-out-alt"></i>
                      <span className="media-body"> Logout</span>
                    </NavLink>
                  </li>
              </ul>
          </aside>

          <div className="pmd-sidebar-overlay"></div>

      </section>
    </div>
  )
}
