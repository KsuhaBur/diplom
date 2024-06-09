import React, { Component } from 'react';
import './Menu.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from 'react-router-dom';
import Discipline from '../../Pages/Discipline/Discipline';
import EduPlan from '../../Pages/EduPlan/EduPlan';
import OP from '../../Pages/OP/OP';
import { useState } from 'react';
import RPD from '../../Pages/RPD/RPD';


const Menu = () =>  {

    const [isActive, setIsActive] = useState(false); // Состояние для управления открытием/закрытием панели

    const toggleSidebar = () => {
      setIsActive(!isActive); // Переключение состояния
    };

    return (
      <Router>
        <div className="navigation-bar">
            <div className=''>
            <button className="sidenav-toggle" onClick={toggleSidebar}>
                {isActive ? 'Закрыть' : 'Открыть'}
            </button>
            <nav className={`sidenav ${isActive ? 'active' : ''}`}>
            
                <ul>
                    <li>
                        <Link className='sidenav-link' to='/'>Рабочие программы дисциплины</Link>
                    </li>
                    <li>
                        <Link className='sidenav-link' to='/eduPlans'>Учебные планы</Link>
                    </li>
                    <li>
                        <Link className='sidenav-link' to='/ops'>Образовательные программы</Link>
                    </li>
                </ul>
            </nav>
            </div>
        

        <div className='container'>
        <Routes>
          <Route path="/" element={<RPD />} />
          <Route path="/eduPlans" element={<EduPlan />} />
          <Route path="/ops" element={<OP />} />
        </Routes>
        </div>
        
            

        </div>
      </Router>
    )
  }

  export default Menu;
