import React from 'react';
import NameInput from './NameInput';
import Dropdown from './Dropdown';
import InstructionsForm from './InstructionsForm';

export default function Form({ setOrderName, setMainId, setSideId, setDrinkId, setInstructions, instructions }) {
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
    <InstructionsForm
      instructions={instructions}
      setInstructions={setInstructions}
    />

  </div>;
}
