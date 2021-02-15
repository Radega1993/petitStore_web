import { productos } from '../data/data';

export const getProductosByTienda = ( tiendaId = '' ) => {

  if (tiendaId === '') {
    return  [];
  }
  return productos.filter( producto => producto.tienda._id === tiendaId );
}
