import React from 'react'
import { Link } from "react-router-dom";

export const ShopCard = ({
  _id, nombre, calle, via, numero, cp, poblacion, pais, telefono
 }) => {
  return (
    <div className="col-sm">
      <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

        <div className="view view-cascade overlay text-center"> <img className="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Tuck_Shop_in_Oxford.jpg/1200px-Tuck_Shop_in_Oxford.jpg" alt="test"/>

        </div>
        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title"><strong><a href="/">{ nombre }</a></strong></h4>
          <p className="card-text">Pequeña descripción del negocio </p>
          <p className="Address"> <strong>Dirección: </strong> {via} { calle }, { numero }, { cp }, { poblacion }, { pais }</p>
          <p className="phone"> <strong>Telefono: </strong> { telefono } </p>
          <p className="mail"> <strong>Email: </strong> test@mailfake.com</p>

        <div className="card-footer d-flex justify-content-xl-between">
          <Link
            className="btn btn-primary"
            to={ `./tienda/${ _id }`
           }>
           Ir a la tienda
          </Link>
          <div className="btn btn-outline-warning">
            <i className="fa fa-star"> Favorita </i>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
