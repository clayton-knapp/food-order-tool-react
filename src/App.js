import './App.css';
import Display from './Display';
import Form from './Form';
import { useState } from 'react';

function App() {
  // useState
  const [orderName, setOrderName] = useState('');
  const [mainId, setMainId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState(['test', 'test2']);



  return (
    <div className="App">
      <h2>Lebanese Restaurant!</h2>
      <Display 
        orderName={orderName}
        mainId={mainId}
        sideId={sideId}
        drinkId={drinkId}
        instructions={instructions}
      />
      <Form 
        setOrderName={setOrderName}
        setMainId={setMainId}
        setSideId={setSideId}
        setDrinkId={setDrinkId}
        setInstructions={setInstructions}
        instructions={instructions}
      />

    </div>
  );
}

export default App;
