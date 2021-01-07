import React from 'react'

import { CategoriaCard } from './CategoriaCard';

export const Categorias = () => {

  const categorias = [
    {
        "_id": "5f47ce5ef9e583413ec00508",
        "nombre": "Bar",
        "icono": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PotCG63prr773fi-Sh2uUQHaE6%26pid%3DApi&f=1",
    },
    {
        "_id": "5f4777abf9e5834e59c00507",
        "nombre": "Estanco",
        "icono": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ixPJpoTLEIWoH4L6JGh5zQHaFj%26pid%3DApi&f=1",
    },
    {
        "_id": "5f477771f9e583df5bc00506",
        "nombre": "Fruteria",
        "icono": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yb92oYHVCmcR2gqYpcs8ZwHaFj%26pid%3DApi&f=1",
    },
    {
        "_id": "5f47ce5ef9e583413ec00508",
        "nombre": "Bar",
        "icono": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.PotCG63prr773fi-Sh2uUQHaE6%26pid%3DApi&f=1",
    },
    {
        "_id": "5f4777abf9e5834e59c00507",
        "nombre": "Estanco",
        "icono": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ixPJpoTLEIWoH4L6JGh5zQHaFj%26pid%3DApi&f=1",
    },
    {
        "_id": "5f477771f9e583df5bc00506",
        "nombre": "Fruteria",
        "icono": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.yb92oYHVCmcR2gqYpcs8ZwHaFj%26pid%3DApi&f=1",
    }
  ];

  return (
    <div className="container animate__animated animate__fadeIn">
      <h2 className="text-center mt-5"> Categorias </h2>
      <div className="row">
        {
          categorias.map( categoria => (
            <CategoriaCard
              key={ categoria.id }
              { ...categoria }
            />
          ))
        }
      </div>
    </div>
  )
}
