import React from 'react';
import { useState } from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {

  //track form input state
  const [instructionInput, setInstructionInput] = useState('');

  function handleChange(e) {
    setInstructionInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    //adds the instruction to the array by immutable copying the original array and adding to it
    setInstructions([...instructions, instructionInput]);

    //resets the input
    setInstructionInput('');
  }


  return <form onSubmit={handleSubmit} className='instructions-form'>
    <h4>Any Special Instructions: </h4>
    <input value={instructionInput} onChange={handleChange}></input>
    <button>Submit</button>
  </form>;
}
