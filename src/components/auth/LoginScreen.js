import { Link } from 'react-router-dom';
import React from 'react';

import { Footer } from '../home/Footer';
import { OutNavbar } from '../ui/OutNavbar';

export const LoginScreen = ({ history }) => {

  const handleLogin = () => {
    history.replace('/')
  }

    return (
      <div>
        <OutNavbar />

        <div className="container login__container animate__animated animate__fadeInLeft">
            <div className="row">
                <div className="col-md-12 login__form-1">
                    <h3>Ingreso</h3>
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                                onClick={ handleLogin }
                            />
                        </div>
                        <Link
                          to="/register"
                          className="link"
                        >
                          Create new account
                        </Link>
                    </form>
                </div>
            </div>
        </div>

        <Footer />
      </div>
    )
}
