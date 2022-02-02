import React from 'react';

export default function NameInput({ setOrderName }) {
  function handleChange(e) {
    setOrderName(e.target.value);
  }
  
  return <div>
    <h4>Name for Order:</h4>
    <input onChange={handleChange}></input>
  </div>;
}
