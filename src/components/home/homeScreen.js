import React from 'react'

import { Countdown } from './Countdown';
import { OutNavbar } from '../ui/OutNavbar';
import { Header } from './Header';
import { countdown } from '../../helpers/countdown';


export const HomeScreen = () => {
  const { days, hours, minutes, seconds} = countdown();
  console.log(countdown);
    return (
      <>
        <OutNavbar />

        <Header />

        <div className="countdown">
          <Countdown days={ days } hours={ hours } minutes={ minutes } seconds={ seconds } />
        </div>

      </>
    )
}
