import React, { useEffect } from 'react';
import BwStations from './BWstation';
import Pnr  from './Pnr';



import { BrowserRouter, Route, Routes} from "react-router-dom"; 

function App() {
  //import the package


    return(
      <div>
      <Routes>
      <Route path="/" element={ <Pnr/> } />
      <Route path="/Pnr" element={ <Pnr/> } />
      <Route path="/BWstation" element={ <BwStations/> } />
    </Routes>
    </div>

    )
}
export default App;