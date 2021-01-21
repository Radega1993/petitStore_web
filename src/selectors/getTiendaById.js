import { tiendas } from '../data/data';

export const getTiendaById = ( id ) => {

  return tiendas.find( tienda => tienda._id === id );
}
