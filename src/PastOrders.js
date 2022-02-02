import React from 'react';
import DisplayPastOrder from './DisplayPastOrder';

export default function PastOrders({ orderName, mainId, sideId, drinkId, instructions, pastOrders, setPastOrders }) {

  function handleClick() {
    setPastOrders([...pastOrders, {
      orderName,
      mainId,
      sideId,
      drinkId,
      instructions,
    }]);
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
