import React from 'react'

export const ProductoCard = ({ _id, nombre, descripcion, precio }) => {

    return (
      <div className="col-sm-4 mt-5">
        <div className="container d-flex justify-content-center">
          <figure className="product__card product__card-product-grid card-lg"> <div className="img-wrap"> <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1571750967/Ecommerce/ef192a21ec96.jpg" alt={nombre}/> </div>
            <figcaption className="info-wrap">
                <div className="row">
                    <div className="col-md-12 col-xs-12 text-center">
                      <span className="product__title"> { nombre } </span>
                      <span className="product__rated"> { descripcion } </span>
                    </div>
                </div>
            </figcaption>
            <div className="bottom-wrap-payment">
                <figcaption className="info-wrap">
                    <div className="row">
                        <div className="col-md-12 col-xs-12 text-center">  Precio: { precio } <span className="product__rated"></span> </div>
                    </div>
                </figcaption>
            </div>
            <div className="bottom-wrap">
              <a href="/" className="product__a product__btn product__btn-primary" data-abc="true"> Añadir al Carro </a>
            </div>
          </figure>
        </div>

      </div>

    )
}
