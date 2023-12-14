import React from "react";
import { Route, Routes } from "react-router-dom";
import District from "./Admin/District";
import Place from "./Admin/Place";
import UseStateDemo from "./Hooks/UseStateDemo";
import UseMemoDemo from "./Hooks/UseMemoDemo";
import UseReducerDemo from "./Hooks/UseReducerDemo";
import Parent from "./Hooks/useCallBack/Parent";
import UseEffectDemo from "./Hooks/UseEffect/UseEffectDemo";
import ImperativeHandle from "./Hooks/imperativeHandle/ImperativeHandleDemo";
import CustomParent from "./Hooks/Custom/Parent";

const App = () => {
  return(
    <div>
      <Routes>
        <Route path="/District" element={<District/>}/>
        <Route path="/Place" element={<Place/>}/>
        <Route path="/UseStateDemo" element={<UseStateDemo/>}/>
        <Route path="/Parent" element={<Parent/>}/>
        <Route path="/UseEffectDemo" element={<UseEffectDemo/>}/>
        <Route path="/UseMemoDemo" element={<UseMemoDemo/>}/>
        <Route path="/UseReducerDemo" element={<UseReducerDemo/>}/>
        <Route path="/ImperativeHandle" element={<ImperativeHandle/>}/>
        <Route path="/CustomParent" element={<CustomParent/>}/>


      </Routes>
    </div>
  )
}
export default App