import React from 'react';
import './Structure.css';

export default function Structure({data}) {
    const rows = data.map((row) => (
        <tr>
      {/* <td>{row.№}</td> Автоматическая нумерация */}
      <td>{row.Наименование}</td>
      <td>{row.Количество_часов}</td>
      <td>{row.Формы_промежуточной_аттестации}</td>
    </tr>
      ));

  return (
    <div>
      <h2 className="title">Структура дисциплины</h2>
      <p className="text">
       {/* <b>Форма обучения: </b> {data.trainingForm}  */}
      </p>
      {/* <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Наименование</th>
          <th>Количество часов</th>
          <th>Формы промежуточной аттестации</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2">Итого:</td>
          <td>{data.reduce((total, row) => total + row.Количество_часов, 0)}</td>
          <td>{data.reduce((total, row) => total + row.Формы_промежуточной_аттестации, 0)}</td>
        </tr>
      </tfoot>
    </table> */}
    </div>
  )
}
