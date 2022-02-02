import React from 'react';

export default function NameInput({ setOrderName, orderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  
  return <div>
    <h4>Name for Order:</h4>
    <input value={orderName} onChange={handleChange}></input>
  </div>;
}
