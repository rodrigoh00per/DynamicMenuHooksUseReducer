import React from "react";

const Salary = ({show,changeStatus}) => {
  return (
    <div>
      <button onClick={()=>changeStatus()}> Salario </button>
      {show ? <h3>se muestra Salario </h3> : <h3>se oculta Salario</h3>}
    </div>
  );
};

export default Salary;
