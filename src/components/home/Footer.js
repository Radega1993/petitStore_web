
import React from 'react'

export const Footer = () => {

  return (
    <footer className="footer-distributed animate__animated animate__fadeInLeft">

			<div className=" col-md-4 footer-left">

				<h3>Petit<span>Store</span></h3>

				<p className="footer-links">
					<a href="/">Home</a>
					·
					<a href="/">About</a>
					·
					<a href="/">Faq</a>
					·
					<a href="/">Contact</a>
				</p>

				<p className="footer-company-name">Petit Store &copy; 2021</p>
			</div>

			<div className="footer-center col-md-4">

				<div>
					<i className="fa fa-map-marker"></i>
					<p><span>En internet</span> mundo, La Tierra</p>
				</div>

				<div>
					<i className="fa fa-phone"></i>
					<p>+1 555 111111</p>
				</div>

				<div>
					<i className="fa fa-envelope"></i>
					<p><a href="mailto:support@company.com">support@petitstore.com</a></p>
				</div>

			</div>

			<div className="footer-right col-md-4">

				<p className="footer-company-about">
					<span>Sobre petitStore</span>
					Nuestro objetivo es crear vínculos estables entre las personas y los comercios de barrio. Integramos a los comercios de barrio en el mundo digital y los conectamos con sus clientes. Potenciamos la compra al pequeño comercio ofreciendo descuentos y regalos. Participa de esta transformación, apoya tu barrio, únete a nuestra comunidad.
				</p>

			</div>

		</footer>
  )
}
