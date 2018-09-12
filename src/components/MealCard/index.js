import React from 'react';
import Card from '../Card';
import './style.css';

const MealCard  = ({ onClick, name}) => {
  return(
    <Card onClick={onClick}>
      <div className="row">
        <p>{name}</p>
      </div>
    </Card>
  )
}

export default MealCard
