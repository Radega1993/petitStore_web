import React from 'react'

import { About } from './About';
import { Countdown } from './Countdown';
import { Footer } from './Footer';
import { Header } from './Header';
import { OutNavbar } from '../ui/OutNavbar';
import { countdown } from '../../helpers/countdown';


export const HomeScreen = () => {

  const { days, hours, minutes, seconds } = countdown();

  return (
    <>
      <OutNavbar />

      <Header />

      <div className="countdown animate__animated animate__fadeIn">
        <Countdown days={ days } hours={ hours } minutes={ minutes } seconds={ seconds } />
      </div>

      <About />

      <Footer />
    </>
  )
}
