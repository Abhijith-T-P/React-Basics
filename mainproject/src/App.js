import React from "react";
import { Route, Routes } from "react-router-dom";
import District from "./Admin/District";
import Place from "./Admin/Place";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/District" element={<District/>}/>
        <Route path="/Place" element={<Place/>}/>
      </Routes>
    </div>
  )
}
export default App