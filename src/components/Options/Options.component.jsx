import React from "react";
import Price from "./Price.component";
import Salary from "./Salary.component";
import Size from "./Size.component";

export const OptionsShow = {
  price: Price,
  salary: Salary,
  size: Size
};

export const ComponentOption = ({ type, ...restProps }) => {
  let Component = OptionsShow[type];

  return <Component {...restProps} />;
};

export default ComponentOption;
