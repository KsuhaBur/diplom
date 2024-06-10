import React from 'react';
import './Practice.css';

export default function Practice({props}) {
  return (
    <div>
      <h2 className="title">
      Структура и содержание практической части курса
      </h2>
      <p className="text">
        {props.practice}
      </p>
    </div>
  )
}
