import React from 'react'
import { Link } from "react-router-dom";

export const ShopCard = ({ _id, nombre }) => {
  return (
    <div className="col-sm">
      <div className="card card-cascade card-ecommerce wider shadow mb-5 ">

        <div className="view view-cascade overlay text-center"> <img className="card-img-top" src="https://i.imgur.com/9VZGPJF.jpg" alt="test"/>

        </div>
        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title"><strong><a href="/">{ nombre }</a></strong></h4>
          <p className="card-text">This is a Mobile phone with all the advance features and at best price. </p>
          <p className="price">$50</p>
          <ul className="row text-center">
              <li><i className="fa fa-star"></i></li>
          </ul>
        <div className="card-footer">
          <Link
            className="btn btn-primary"
            to={ `./tienda/${ _id }`
           }>
           Ir a la tienda
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}
