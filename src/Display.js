import React from 'react';

export default function Display({ orderName, mainId, sideId, drinkId, instructions }) {
  return <div className='food-display'>
    <div>
      <img src={`main-${mainId}.jpeg`}/>
      <img src={`side-${sideId}.jpeg`}/>
      <img src={`drink-${drinkId}.jpeg`}/>
    </div>
    <h3>Name for order: {orderName}</h3>
    <h3>Special Instructions:</h3>
    {
      instructions.map((instruction, i) => 
        <p key={instruction + i}>{instruction}</p>
      )
    }
  </div>;
}
