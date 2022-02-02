import React from 'react';

export default function Dropdown({ setId, type, options }) {

  function handleChange(e) {
    setId(e.target.value);
  }

  return <div>
    <div className='dropdown'>
      <h4>Select {type}</h4>
      <select onChange={handleChange}>
        {
          options.map((option, i) =>
            <option 
              key={option + i}
              value={i + 1}
            >{option}</option>
          )
        }
      </select>
    </div>
  </div>;
}
