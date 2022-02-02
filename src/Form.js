import React from 'react';
import NameInput from './NameInput';
import Dropdown from './Dropdown';

export default function Form({ setOrderName, setMainId, setSideId, setDrinkId, setInstructions }) {
  return <div className='form'>
    {/* Name Input Component */}
    <NameInput 
      setOrderName={setOrderName}
    />

    {/* 3 Dropdowns */}
    <div className='dropdowns-container'>
      <Dropdown className='dropdown'
        setId={setMainId}
        type={'Main'}
        options={['Mezza', 'Skewers', 'Shwarma']}
      />
      <Dropdown className='dropdown'
        setId={setSideId}
        type={'Side'}
        options={['Hummus', 'Baba Ganoush', 'Mujadra']}
      />
      <Dropdown className='dropdown'
        setId={setDrinkId}
        type={'Drink'}
        options={['Mango Lassie', 'Turkish Coffee', 'Bucket-O-Dew']}
      />
    </div>

    {/* Instruction Form */}
    <form className='instructions-form'>
      <h4>Any Special Instructions: </h4>
      <input></input>
      <button>Submit</button>
    </form>

  </div>;
}
