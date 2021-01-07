
import React from 'react'


export const About = () => {

  return (
    <div className="animate__animated animate__backInLeft">
      <h2 className="h1-responsive font-weight-bold text-center my-5">Por que es tan increible?</h2>
      <p className="lead grey-text text-center w-responsive mx-auto mb-5">Realiza tus compras desde casa y solo desplazate a buscar tus pedidos. olvidate de las esperas y de las colas.</p>

      <div className="row">
        <div className="col-lg-12">
            <img className="img-responsive center-block d-block mx-auto" src="assets/img/funcionamiento.png" alt="funcionamiento"/>
        </div>
      </div>
    </div>
  )
}
