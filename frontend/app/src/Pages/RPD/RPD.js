import React from 'react';
import './RPD';
import DynamicTable from '../../components/Tables/Table';

  const exampleData = [
    {
      number: "01.01.01",
      name: "Алгоритмы и структуры данных",
      level_edu: "бакалавриат",
      author: "Сущенко А. А.",
      date: "01.01.2024"
  },
  {
      number: "01.01.02",
      name: "Математический анализ",
      level_edu: "Бакалавриат",
      author: "Клевчихин",
      date: "10.10.2023"
  },
  {
      number: "01.01.03",
      name: "Прикладная информатика",
      level_edu: "специалитет",
      author: "Сущенко А. А.",
      date: "11.12.2023"
  },
  {
      number: "01.01.04",
      name: "История",
      level_edu: "бакалавриат",
      author: "Алексеев",
      date: "15.04.2024"
  },
  ];

  const columns = [
    { id: 'number', label: 'Номер', accessor: 'number' },
    { id: 'name', label: 'Название', accessor: 'name' },
    { id: 'level_edu', label: 'Уровень образования', accessor: 'level_edu' },
    { id: 'author', label: 'Руководитель', accessor: 'author' },
    { id: 'date', label: 'Дата', accessor: 'date' },
  ]

export default function RPD() {
  return (
    <div>
        <DynamicTable data={exampleData} columns={columns} /> 
        {/* Сделать кнопку по добавлению рпд */}
    </div>
    
  )
}
