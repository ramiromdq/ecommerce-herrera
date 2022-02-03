import React, { useState } from "react";
const ItemCounter = ({ stock }) => {
  const [counter, setCounter] = useState(0);
  const [getStock, setStock] = useState(stock);

  const minusCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
    setStock(getStock + 1);
  };

  const plusCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
    setStock(getStock - 1);
  };

  return (
    <div>
      <div>
        <h4> Stock Disponible: {getStock} </h4>
        <h3>cantidad de items</h3>
        <button onClick={minusCounter}>-</button>
        <span>{counter}</span>
        <button onClick={plusCounter}>+</button>
      
      </div>
    </div>
  );
};
export default ItemCounter;
