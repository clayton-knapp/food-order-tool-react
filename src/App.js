import './App.css';
import Display from './Display';
import Form from './Form';
import { useState } from 'react';
import PastOrders from './PastOrders';
import { useAppState } from './useAppState';

function App() {
  // useState
  const {
    orderName,
    setOrderName,
    mainId,
    setMainId,
    sideId,
    setSideId,
    drinkId,
    setDrinkId,
    instructions,
    setInstructions,
    pastOrders,
    setPastOrders
  } = useAppState();



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
        orderName={orderName}
      />
      <PastOrders
        orderName={orderName}
        mainId={mainId}
        sideId={sideId}
        drinkId={drinkId}
        instructions={instructions}
        pastOrders={pastOrders}
        setPastOrders={setPastOrders}
        setInstructions={setInstructions}
        setOrderName={setOrderName}
      />

    </div>
  );
}

export default App;
