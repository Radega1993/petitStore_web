
import React from 'react'

export const Header = () => {

  return (
    <div className="home__header-yelow ">
      <div className="container hero ">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl-5 offset-xl-1">
            <h1 className="text-center home__header-text"><strong>Solucion para <br/>todo tipo de comercio</strong></h1>
            <p className="home__text-header mt-5">Nuestro objetivo es crear vínculos estables entre las personas y los comercios de barrio. Integramos a los comercios de barrio en el mundo digital y los conectamos con sus clientes. Potenciamos la compra al pequeño comercio ofreciendo descuentos y regalos. Participa de esta transformación, apoya tu barrio, únete a nuestra comunidad.<br/></p>
          </div>
        <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block phone-holder">
          <div className="iphone-mockup mt-5">
          <img src="assets/img/imagen.jpg" className="img-responsive home__img-about" alt="home_img" />
           </div>
        </div>
      </div>
    </div>
  </div>
  )
}
