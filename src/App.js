import React, { useState } from 'react';
import FormDatos from "./components/FormDatos";
import GenCajas from "./components/GenCajas";

import './App.css';

function App() {

  const [state, setState] = useState([]);
  // console.log("1");

  return (

    < div className="container" >
      <FormDatos datosState={state} fcambiaState={setState} />
      {/* <GenCajas datosState={state} /> */}
      {state.map(
        (currState, i) => <GenCajas key={i} caja={state[i]} />

      )}
    </div >
  )
}

export default App;
