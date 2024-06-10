import React from "react";
import { useState } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DynamicTable from "./components/Tables/Table";
import Sidebar from "./components/Menu/Menu";
import List from "./components/List/List";
import Discipline from "./Pages/Discipline/Discipline";
import { BrowserRouter, Route } from 'react-router-dom';
import Buttons from "./components/Buttons/Buttons";
import Menu from "./components/Menu/Menu";
import { Routes } from "react-router-dom";
import OP from "./Pages/OP/OP";
import EduPlan from "./Pages/EduPlan/EduPlan";
// import './Pages/Discipline/Discipline.css';







function App() {

  return (
    
    
    <div className="wrapper">
      <Header />
      <Menu />
      
      
      {/* <List keysObject={keysO} valuesObject={valuesO} /> */}
      {/* <BrowserRouter> */}
      {/* <div className="button-container">
      <Buttons components={components} activeComponentIndex={activeComponentIndex} handleClick={handleClick} />
      <div className="component-container">{components[activeComponentIndex].component}</div>
    </div> */}
      
      {/* <Routes>
          <Route path="/" element={<Discipline />} />
          <Route path="/eduPlans" element={<EduPlan />} />
          <Route path="/ops" element={<OP />} />
        </Routes> */}

      
    </div>
  );
}

export default App;
