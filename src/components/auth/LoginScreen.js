import { Link } from 'react-router-dom';
import React from 'react';

import { OutNavbar } from '../ui/OutNavbar';

export const LoginScreen = () => {
    return (
      <div>
        <OutNavbar />
        <div className="container login__container">
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
      </div>
    )
}
