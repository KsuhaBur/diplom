import React from 'react';
import './Theory.css';
import List from '../List/List';

export default function Theory({value}) {
  return (
    <div>
      <h2 className="title">
      Структура и содержание теоретической части курса
      </h2>
        <p className="text">
            {value.theory}
        </p>
    </div>
  )
}
