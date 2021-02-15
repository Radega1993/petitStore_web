import React from 'react'
import { useParams } from "react-router-dom";

import { ProductoCard } from './ProductoCard';
import { getProductosByTienda } from '../../selectors/getProductosByTienda';


export const ProductsScreen = () => {
  const { id } = useParams();
  const productos = getProductosByTienda(id);

    return (
      <>
        <div className="container animate__animated animate__fadeIn">
          <h2 className="text-center mt-5"> Productos </h2>
          <hr/>
          <div className="row justify-content-center">
            {
              ( productos.length === 0 )
              &&
              <div className="alert alert-danger mt-5 mb-5">

                No hay productos en la tienda todavia
              </div>

            }

            {
              productos.map( producto => (
                <ProductoCard
                  key={ producto._id }
                  { ...producto }
                />
              ))
            }

          </div>
        </div>
      </>
    )
}
