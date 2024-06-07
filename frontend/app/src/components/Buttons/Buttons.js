import React from 'react';
import "./Buttons.css";



const Buttons = ({ components, activeComponentIndex, handleClick }) => {
  return (
    <div className="button-list">
      {components.map((component, index) => (
        <button
          key={index}
          className={activeComponentIndex === index ? 'active' : ''}
          onClick={() => handleClick(index)}
        >
          {component.label}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
