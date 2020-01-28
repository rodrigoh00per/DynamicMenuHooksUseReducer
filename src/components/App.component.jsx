import React from "react";
import Header from "./Header/Header.component";
import { OptionsShow } from "./Options/Options.component";

const App = () => {
  return (
    <div>
      <Header   optionstoShow={OptionsShow}/>
      <h3> body</h3>
    </div>
  );
};
export default App;
