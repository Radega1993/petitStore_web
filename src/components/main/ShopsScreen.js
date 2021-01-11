import React from 'react'

import { ShopCard } from './ShopCard';
import { getTiendasByCategoriaId } from '../../selectors/getTiendasByCategoria';

export const ShopsScreen = ({ match }) => {
  const id = match.params.id;
  const tiendas = getTiendasByCategoriaId( id );
  return (
    <div className="container animate__animated animate__fadeIn">
      <h2 className="text-center mt-5"> Tiendas </h2>
      <div className="row mt-5">
        {
          tiendas.map( tienda => (
            <ShopCard
              key={ tienda._id }
              { ...tienda }
            />
          ))
        }
      </div>
    </div>
  )
}
