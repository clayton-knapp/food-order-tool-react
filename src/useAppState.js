import { useState } from 'react';

export function useAppState() {
  // useState
  const [orderName, setOrderName] = useState('');
  const [mainId, setMainId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [instructions, setInstructions] = useState([]);
  //Stretch: past orders
  const [pastOrders, setPastOrders] = useState([]);


  return {
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
  };
}