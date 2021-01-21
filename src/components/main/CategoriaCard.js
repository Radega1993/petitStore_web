import React from 'react'
import { Link } from "react-router-dom";

export const CategoriaCard = ({ _id, nombre, icono }) => {

    return (

      <div className="col-sm-4 mt-5">
        <div className="card">
          <img className="card-img-top" src={icono} alt={ nombre } />
          <div className="card-body">
            <h5 className="card-title"> { nombre } </h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link
              className="btn btn-custom btn-primary"
              to={ `./categoria/${ _id }`
             }>
             Ir a la categoria
            </Link>
          </div>
        </div>
      </div>
    )
}
