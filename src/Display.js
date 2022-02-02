import React from 'react';

export default function Display() {
  return <div className='food-display'>
    <div>
      <img src='main-1.jpeg'/>
      <img src='side-1.jpeg'/>
      <img src='drink-1.jpeg'/>
    </div>
    <h3>Name for order: {}</h3>
    <h3>Special Instructions:</h3>
    {}
  </div>;
}
