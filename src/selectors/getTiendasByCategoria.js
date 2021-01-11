import { tiendas } from '../data/data';

export const getTiendasByCategoriaId = ( categoriaId = '' ) => {

  if (categoriaId === '') {
    return  [];
  }
  return tiendas.filter( tienda => tienda.categoria._id === categoriaId );
}
