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



  const data = {
    disciplineName: 'Программирование на JavaScript',
    supervisor: 'Иванов И.И.',
    studyDirection: 'Прикладная информатика',
    structuralUnit: 'Кафедра информационных технологий',
    trainingForm: 'Очная',
    educationLevel: 'Бакалавриат',
    implementationLanguage: 'JavaScript',
    numberOfSemesters: '4',
  };

  const keysObject = {
    disciplineName: 'Информация по дисциплине',
    supervisor: 'Руководитель',
    studyDirection: 'направление',
    structuralUnit: 'Структурное поздразделение',
    trainingForm: 'Форма обучение',
    educationLevel: 'Уровень образования',
    implementationLanguage: 'Язык реализации',
    numberOfSemesters: 'Количество семестров'
  }

  const keysO = {
    purpose: "цель",
    tasks: "задачи",
    know: "знать",
    able : "уметь",
  }

  const valuesO = {
    purpose: "изучение основных разделов теории машинного обучения (Machine Learning) и овладение навыками практического решения задач интеллектуального анализа данных - майнинга данных (Data Mining). ",
    tasks: ["Изучить основные инструменты математического анализа, линейной алгебры, методов оптимизации и теории вероятностей;",
       "Получить базовые навыки программирования на языках С++ и Python применительно к работе с большими объемами данных;",
      "Изучить основные модели машинного обучения и методики оценки их качества;",
    "Изучить основные способы организации искусственных нейронных сетей;",
  "Овладеть методологией управления data-science проектами;"],
    know: ["современное состояние исследований в области машинного обучения;",
      "принципы построения систем машинного обучения;",
      "модели представления и описания технологий машинного обучения."
    ],
    able : [
      "проводить анализ предметной области;",
      "определять назначение, выбирать методы и средства для построения систем машинного обучения;",
      "строить системы машинного обучения"
    ]
  }



function App() {
  const [components] = React.useState([
    { label: 'Компонент 1', component: <List keysObject={keysO} valuesObject={valuesO} />  },
    { label: 'Компонент 2', component: <List keysObject={keysObject} valuesObject={data} /> },
  ]);
  const [activeComponentIndex, setActiveComponentIndex] = React.useState(0);

    const handleClick = (index) => {
      setActiveComponentIndex(index);
    };
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
