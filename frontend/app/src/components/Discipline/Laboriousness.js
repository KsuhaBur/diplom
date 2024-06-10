import React from 'react';
import "./Laboriousness.css";
import DynamicTable from '../Tables/Table';

const columns = [
    { id: 'reduction', label: 'Обозначение', accessor: 'reduction' },
    { id: 'designation', label: 'Виды учебных занятий и работы обучающегося', accessor: 'designation' }
]

const data = [
    {
        reduction: "Лаб",
        designation: "Лабораторные работы"
    },
    {
        reduction: "Пр",
        designation: "Практические занятия"
    },
    {
        reduction: "ОК",
        designation: "Онлайн курс"
    },
    {
        reduction: "СР ",
        designation: "Самостоятельная работа обучающегося в период теоретического обучения"
    },
    {
        reduction: "Контроль",
        designation: "Самостоятельная работа обучающегося и контактная работа обучающегося с преподавателем в период промежуточной аттестации"
    },
]

export default function Laboriousness({value}) {
  return (
    <div>
        <h2 className="title">Трудоёмкость дисциплины и видов учебных занятий по дисциплине</h2>
      <p className="text">Общая трудоемкость дисциплины составляет {value.credits} зачётных единицы {value.credits } академических часа, в том числе 36 академических часа, отведенных  на контактную работу обучающихся с преподавателем (36 академических часов занятий  практического  типа), и 72 академических часа на самостоятельную работу обучающихся.
      (1 зачетная единица соответствует 36 академическим часам).</p>
      <p className="text">
      Видами учебных занятий и работы обучающегося по дисциплине могут являться:
      </p>
      <DynamicTable data={data} columns={columns} />
    </div>
  )
}
