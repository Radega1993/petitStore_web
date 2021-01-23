import { Link, NavLink } from 'react-router-dom'
import React, {useState} from 'react'

import { Sidebar } from './Sidebar';


export const Navbar = () => {

   const [show, setShow] = useState(false);

  return (
    <nav className="navbar navbar-expand-sm navbar-dark navbar__main ">

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

      <div className="navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <span onClick={() => setShow(prev => !prev)} className="nav-item nav-link text-info navbar__text-logout nav-user" >
              Raül
              {show && <Sidebar />}
            </span>

          </ul>
      </div>
    </nav>
  )
}
