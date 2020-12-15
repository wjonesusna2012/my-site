import React from 'react';
import '../../styles/arrow.css';

const Arrow: React.FC<{direction: string, containerHovered: boolean, clickHandler: () => void}> = ({
    direction, 
    containerHovered,
    clickHandler
  }) => {
  return (
    <div 
      className={`${direction}Arrow round ${containerHovered ? 'Hovered' : 'NotHovered'}`}
      onClick={clickHandler}>
      <div className="arrowContainer">
        <span className="arrow first next "></span>
        <span className="arrow second next "></span>
      </div>
    </div>
  );
};

export default Arrow;