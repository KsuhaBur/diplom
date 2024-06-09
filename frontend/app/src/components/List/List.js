import React from 'react';
import './List.css';

const List = ({ keysObject, valuesObject }) => {
  const renderItem = (key, value) => {
    if (Array.isArray(value)) {
      return (
        <li key={key}>
          <b>{key}</b>:
          <ul className='list-mini'>
            {value.map((nestedValue) => (
              <li key={nestedValue} >{nestedValue}</li>
            ))}
          </ul>
        </li>
      );
    } else {
      return (
        <li key={key}>
          <b>{key}:</b>  {value}
        </li>
      );
    }
  };

  return (
    <ul className='list'>
      {Object.keys(keysObject).map((key) => renderItem(keysObject[key], valuesObject[key]))}
    </ul>
  );
};

export default List;
