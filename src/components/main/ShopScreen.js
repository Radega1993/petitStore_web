import React, {useState} from 'react'
import { Link , useParams } from "react-router-dom";

import { getTiendaById } from '../../selectors/getTiendaById';

export const ShopScreen = () => {
  const { id } = useParams();
  const { _id, nombre, calle, via, numero, cp, poblacion, pais, telefono } = getTiendaById(id);
  const [show, setShow] = useState(false);

  return (

    <div className="container">
      <h1 className="display-2 mt-5 text-center">{ nombre }</h1>
      <hr/>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="imgAbt">
            <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tuck_Shop_in_Oxford.jpg/1200px-Tuck_Shop_in_Oxford.jpg" alt="shop" />
          </div>
        </div>
        <div className="col-md-8">
          <p className="card-text">Pequeña descripción del negocio </p>
          <p className="Address"> <strong>Dirección: </strong> {via} { calle }, { numero }, { cp }, { poblacion }, { pais }</p>
          <p className="phone"> <strong>Telefono: </strong> { telefono } </p>
          <p className="mail"> <strong>Email: </strong> test@mailfake.com</p>
          <div className="row">
            <div className="d-flex justify-content-xl-between mt-5">
              <Link
                className="btn btn-primary ml-3 mr-5"
                to={ `./products/${ _id }`
               }>
               Ir a los productos
              </Link>

              {show
                ?
                (<div className="btn btn-outline-warning" onClick={() => setShow(false)}>
                  <i className="fa fa-star"> Favorita </i>
                </div>)
                :
                (<div className="btn btn-warning" onClick={() => setShow(true)}>
                  <i className="fa fa-star"> Favorita </i>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
