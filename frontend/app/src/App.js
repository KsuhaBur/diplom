import React from "react";
import { useState } from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DynamicTable from "./components/Tables/Table";
import Sidebar from "./components/Sidebar/Sidebar";
import DicplineInfo from "./components/Discipline/DisciplineInfo";

  const exampleData = [
    {
      number: "01.01.01",
      direction: "Прикладная математика и информатика",
      level_edu: "бакалавриат",
      year: "2024"
  },
  {
      number: "01.01.02",
      direction: "Прикладная математика",
      level_edu: "магистратура",
      year: "2023"
  },
  {
      number: "01.01.03",
      direction: "Прикладная информатика",
      level_edu: "специалитет",
      year: "2023"
  },
  {
      number: "01.01.04",
      direction: "Социалогия",
      level_edu: "бакалавриат",
      year: "2024"
  },
  ];

  const columns = [
    { id: 'number', label: 'Номер', accessor: 'number' },
    { id: 'direction', label: 'Направление', accessor: 'direction' },
    { id: 'level_edu', label: 'Уровень образования', accessor: 'level_edu' },
    { id: 'year', label: 'Год', accessor: 'year' },
  ]

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
  


function App() {
  return (
    <div className="wrapper">
      <Header />
      
     
      
      <div className="container">
      {/* <DynamicTable data={exampleData} columns={columns} /> */}
      {/* <DicplineInfo data={data} /> */}
      
      </div>
    </div>
  );
}

export default App;
