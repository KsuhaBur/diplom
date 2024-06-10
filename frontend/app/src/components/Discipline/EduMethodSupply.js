import React from 'react';
import DynamicTable from '../Tables/Table';

const columns = [
    { id: 'number', label: '№', accessor: 'number' },
    { id: 'time', label: 'Дата/сроки выполнения', accessor: 'time' },
    { id: 'type_work', label: 'Вид самостоятельной работы', accessor: 'type_work' },
    { id: 'execution_time', label: 'Примерные норма времени на выполнение', accessor: 'execution_time' },
    { id: 'form_control', label: 'Форма контроля', accessor: 'form_control' },
]

const data = [
    {
      number: "1",
      time: "3 неделя 1 семестра",
      type_work: "Индивидуальное задание. Работа с текстом",
      execution_time: "3 недели",
      form_control: "Проверка программы"
  },
  {
      number: "2",
      time: "9 неделя 1 семестра",
      type_work: "Индивидуальное задание. Снижение размерности",
      execution_time: "3 недели",
      form_control: "Проверка программы"
  },
  {
      number: "3",
      time: "12 неделя 1 семестра",
      type_work: "Индивидуальное задание. Метод опорных векторов",
      execution_time: "3 недели",
      form_control: "Проверка программы"
  },
  ];

export default function EduMethodSupply() {
  return (
    <div>
      <h2 className="title">
      Учебно-методическое обеспечение самостоятельной работы обучающихся
      </h2>
      <div className="text">
      План-график выполнения самостоятельной работы по дисциплине, в том числе примерные нормы времени на выполнение по каждому заданию:
      </div>
        <DynamicTable columns={columns} data={data} />
    </div>
  )
}
