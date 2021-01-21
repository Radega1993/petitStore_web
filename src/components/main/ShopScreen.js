import React from 'react'
import { useParams } from "react-router-dom";
import { getTiendaById } from '../../selectors/getTiendaById';

export const ShopScreen = () => {
  const { id } = useParams();
  const { _id, nombre, calle, via, numero, cp, poblacion, pais, telefono } = getTiendaById(id);

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
        </div>
      </div>
    </div>
  )
}
