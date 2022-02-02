import React from 'react';
import InstructionsList from './InstructionsList';

export default function DisplayPastOrder({ orderName, mainId, sideId, drinkId, instructions }) {
  return <div className='past-order-display'>
    <div>
      <img src={`main-${mainId}.jpeg`}/>
      <img src={`side-${sideId}.jpeg`}/>
      <img src={`drink-${drinkId}.jpeg`}/>
    </div>
    <h3>Name for order: {orderName}</h3>

    <InstructionsList
      instructions={instructions}
    />
  </div>;
}
