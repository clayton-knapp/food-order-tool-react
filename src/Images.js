import React from 'react';

export default function Images({ mainId, sideId, drinkId }) {
  return <div>
    <img src={`main-${mainId}.jpeg`}/>
    <img src={`side-${sideId}.jpeg`}/>
    <img src={`drink-${drinkId}.jpeg`}/>
  </div>;
}
