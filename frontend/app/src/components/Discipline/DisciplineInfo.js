import React from 'react';
import './Discipline.css';

const DisciplineInfo = ({ data }) => {
  return (
    <div className='discipline'>
      <h2 className="title">Информация о дисциплине "{data.disciplineName}"</h2>
      <ul className='list'>
        <li className='list-item'><b>Название дисциплины:</b> {data.disciplineName}</li>
        <li className='list-item'> <b>Руководитель:</b>  {data.supervisor}</li>
        <li className='list-item'> <b>Направление подготовки:</b> {data.studyDirection}</li>
        <li className='list-item'> <b>Структурное подразделение:</b> {data.structuralUnit}</li>
        <li className='list-item'> <b>Форма подготовки:</b> {data.trainingForm}</li>
        <li className='list-item'> <b>Уровень образования:</b> {data.educationLevel}</li>
        <li className='list-item'> <b>Язык реализации:</b> {data.implementationLanguage}</li>
        <li className='list-item'> <b>Количество семестров:</b> {data.numberOfSemesters}</li>
      </ul>
    </div>
  );
};

export default DisciplineInfo;
