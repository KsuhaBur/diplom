import React from "react";
import { useState } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DynamicTable from "./components/Tables/Table";
import Sidebar from "./components/Sidebar/Sidebar";
import List from "./components/Discipline/List";
import Discipline from "./Pages/Discilpline/Discilpline";
import { BrowserRouter, Route } from 'react-router-dom';
import Buttons from "./components/Buttons/Buttons";

  // const exampleData = [
  //   {
  //     number: "01.01.01",
  //     direction: "Прикладная математика и информатика",
  //     level_edu: "бакалавриат",
  //     year: "2024"
  // },
  // {
  //     number: "01.01.02",
  //     direction: "Прикладная математика",
  //     level_edu: "магистратура",
  //     year: "2023"
  // },
  // {
  //     number: "01.01.03",
  //     direction: "Прикладная информатика",
  //     level_edu: "специалитет",
  //     year: "2023"
  // },
  // {
  //     number: "01.01.04",
  //     direction: "Социалогия",
  //     level_edu: "бакалавриат",
  //     year: "2024"
  // },
  // ];

  // const columns = [
  //   { id: 'number', label: 'Номер', accessor: 'number' },
  //   { id: 'direction', label: 'Направление', accessor: 'direction' },
  //   { id: 'level_edu', label: 'Уровень образования', accessor: 'level_edu' },
  //   { id: 'year', label: 'Год', accessor: 'year' },
  // ]

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

  const pagesData = [
    { id: 1, label: 'Страница 1', path: '/page1' },
    { id: 2, label: 'Страница 2', path: '/page2' },
    { id: 3, label: 'Страница 3', path: '/page3' },
  ];

  



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
      
      <div className="container">
      {/* <DynamicTable data={exampleData} columns={columns} />  */}
      {/* <List keysObject={keysO} valuesObject={valuesO} /> */}
      {/* <BrowserRouter> */}
      <div className="button-container">
      <Buttons components={components} activeComponentIndex={activeComponentIndex} handleClick={handleClick} />
      <div className="component-container">{components[activeComponentIndex].component}</div>
    </div>
      </div>
    </div>
  );
}

export default App;
