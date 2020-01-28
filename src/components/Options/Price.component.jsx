import React from "react";
const Price = ({ show, changeStatus }) => {
  return (
    <div>
      <button onClick={()=>changeStatus()}> Precio </button>
      {show ? <h3>se muestra precio </h3> : <h3>se oculta precio</h3>}
    </div>
  );
};

export default Price;
