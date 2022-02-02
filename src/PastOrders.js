import React from 'react';
import DisplayPastOrder from './DisplayPastOrder';

export default function PastOrders({ orderName, mainId, sideId, drinkId, instructions, pastOrders, setPastOrders, setInstructions, setOrderName }) {

  function handleClick() {
    setPastOrders([...pastOrders, {
      orderName,
      mainId,
      sideId,
      drinkId,
      instructions,
    }]);

    //on submit to past orders: clear the current instructions array
    setInstructions([]);

    //on submit to past orders: clear the current name
    setOrderName('');
    //also resets the input box by passing down the order name to the name input component and making the value of the input = orderName


  }

  return <div>
    <button onClick={handleClick}>
      Add to Past Orders
    </button>
    <div className='past-orders-container'>
      {
        pastOrders.map((pastOrder, i) =>
          <DisplayPastOrder key={pastOrder + i}
            orderName={pastOrder.orderName}
            mainId={pastOrder.mainId}
            sideId={pastOrder.sideId}
            drinkId={pastOrder.drinkId}
            instructions={pastOrder.instructions}
          />
        )
      }
    </div>

  </div>;
}
