import React from "react";
const Size = ({ changeStatus, show }) => {
  return (
    <div>
      <button onClick={() => changeStatus()}> tamaño </button>
      {show ? <h3>se muestra tamaño </h3> : <h3>se oculta tamaño</h3>}
    </div>
  );
};

export default Size;
