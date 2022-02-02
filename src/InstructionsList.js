import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return <div>
    <h3>Special Instructions:</h3>
    {
      instructions.map((instruction, i) => 
        <Instruction 
          key={instruction + i}
          instruction={instruction}
        />
      )
    }
  </div>;
}
