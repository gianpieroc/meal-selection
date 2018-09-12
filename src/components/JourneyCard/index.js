import React from 'react';
import Card from '../Card';
import moment from 'moment';
import './style.css';

const JourneyCard  = ({ onClick, from, to, departureDate, arrivalDate }) => {
  const departureDateParsed = moment(departureDate).format('D MMMM YYYY \\at h:mm a')
  const arrivalDateParsed = moment(arrivalDate).format('D MMMM YYYY \\at h:mm a')
  return(
    <Card onClick={onClick}>
      <div className="row">
        <p>{ `from: ${from}` }</p>
        <p>{ `to: ${to}`}</p>
      </div>
      <div className="row">
          <p>{ departureDateParsed }</p>
          <p>{ arrivalDateParsed }</p>
      </div>
    </Card>
  )
}

export default JourneyCard
