import React from 'react'

import { CategoriaCard } from './CategoriaCard';
import { getCategorias } from '../../selectors/getCategorias';

export const CategoriasScreen = () => {

  const categorias = getCategorias();

  return (
    <div className="container animate__animated animate__fadeIn">
      <h2 className="text-center mt-5"> Categorias </h2>
      <div className="row">
        {
          categorias.map( categoria => (
            <CategoriaCard
              key={ categoria._id }
              { ...categoria }
            />
          ))
        }
      </div>
    </div>
  )
}
