import React, { useState, useEffect } from 'react';
import moment from 'moment'
import accounts from '../assets/accounts.json'

const EventDate = moment('2020-06-09 13:38:15', moment.ISO_8601)

const CountdownTimer= () => {
  const calculateTimeLeft = () => {
    let timeLeft = {};
    const difference = EventDate - moment();
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div >
      <p>{EventDate.format('LLLL')}</p>
      {timerComponents.length ? timerComponents : <span >Time's up!</span>}
    </div>
  );
}

export default CountdownTimer