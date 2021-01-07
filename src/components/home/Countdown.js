import React, { useState, useEffect } from 'react'

export const Countdown = ({ days = 0 ,hours = 0, minutes = 0, seconds = 0 }) => {

  const [over, setOver] = useState(false);
  const [time, setTime] = useState({
    days: parseInt(days),
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (over) return;
    if (time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0) setOver(true);
    else if (time.hours === 0 && time.minutes === 0 && time.seconds === 0)
      setTime({
        days: time.days - 1,
        hours: 24,
        minutes: 59,
        seconds: 59
      });
    else if (time.minutes === 0 && time.seconds === 0)
      setTime({
        days: time.days,
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds === 0)
      setTime({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        days: time.days,
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };


  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="rounded counter__bgcolor text-white shadow p-5 text-center">
      <p className="mb-0 font-weight-bold text-uppercase"> Tiempo para el lanzamiento </p>
      <div className="row">
        <div className="holder p-2 col-md-3"><span className="h2 font-weight-bold">{time.days.toString().padStart(2, '0')}</span> Day</div>
        <div className="holder p-2 col-md-3"><span className="h2 font-weight-bold">{time.hours.toString().padStart(2, '0')}</span> Hr</div>
        <div className="holder p-2 col-md-3"><span className="h2 font-weight-bold">{time.minutes.toString().padStart(2, '0')}</span> Min</div>
        <div className="holder p-2 col-md-3"><span className="h2 font-weight-bold">{time.seconds.toString().padStart(2, '0')}</span> Sec</div>
      </div>
      {/*
      <p>{`${time.days.toString().padStart(2, '0')}:${time.hours.toString().padStart(2, '0')}:${time.minutes
        .toString().padStart(2, '0')}:${time.seconds.toString().padStart(2, '0')}`}</p>
        */}
      <div>{over ? "Time's up!" : ''}</div>
    </div>
  );
}
