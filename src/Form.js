import React from 'react';

export default function Form() {
  return <div className='form'>
    {/* Name Input Component */}
    <div>
      <label>Name for Order: 
        <input></input>
      </label>
    </div>

    {/* 3 Dropdowns */}
    <div className='dropdowns-container'>
      <div className='dropdown'>
        <h4>Select Main:</h4>
        <select>
          <option value='1'>Mezza</option>
          <option value='2'>Skewers</option>
          <option value='3'>Shwarma</option>
        </select>
      </div>
    </div>

    {/* Instruction Form */}

  </div>;
}
