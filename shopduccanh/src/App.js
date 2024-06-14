// src/App.js

import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./page/home/Home";
import Header from "./component/general/Header";
import Slider from "./component/slider/Slider";



function App() {
  return (
    <div>
      <BrowserRouter>
     
        <Header />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/slider" element={<Slider />}></Route>
          {/* <Route path="/shop" element={<Navigate to="/home" />}></Route>        */}
         
        </Routes>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
