import React from 'react';
import InstructionsList from './InstructionsList';
import Images from './Images';

export default function Display({ orderName, mainId, sideId, drinkId, instructions }) {
  return <div className='food-display'>
    <Images
      mainId={mainId}
      sideId={sideId}
      drinkId={drinkId}
    />
    <h3>Name for order: {orderName}</h3>

    <InstructionsList
      instructions={instructions}
    />
  </div>;
}
