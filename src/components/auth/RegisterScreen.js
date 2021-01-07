import { Link } from 'react-router-dom';
import React from 'react';

import { Footer } from '../home/Footer';
import { OutNavbar } from '../ui/OutNavbar';

export const RegisterScreen = () => {
    return (
      <div>
      <OutNavbar />
      <div className="container login__container animate__animated animate__fadeInLeft">
          <div className="row">

              <div className="col-md-12 login__form-2">
                  <h3>Registro</h3>
                  <form>
                      <div className="form-group">
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Nombre"
                          />
                      </div>
                      <div className="form-group">
                          <input
                              type="email"
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
                              type="password"
                              className="form-control"
                              placeholder="Repita la contraseña"
                          />
                      </div>

                      <div className="form-group">
                          <input
                              type="submit"
                              className="btnSubmit"
                              value="Crear cuenta" />
                      </div>
                      <Link
                        to="/login"
                        className="link__register"
                      >
                        Alredy registered?
                      </Link>
                  </form>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}
