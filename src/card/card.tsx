import React, { useState } from 'react';
import Arrow from './arrow/arrow';
import '../styles/card.css';

interface CardProps {
  description: string,
  imageName: string,
  changeCardLeft: () => void,
  changeCardRight: () => void,
  expandDescription: () => void,
}

const Card: React.FC<CardProps> = ({ description, imageName, changeCardLeft, changeCardRight, expandDescription}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="CardContainer" onMouseOver={() => { setHovered(true)}} onMouseOut={() => { setHovered(false)}}>
      <img alt="Text Here" src={`${imageName}`} onClick={() => expandDescription()} height="500" width="500" />
      <Arrow
        direction="Left"
        containerHovered={hovered}
        clickHandler={changeCardLeft}
      />
      <Arrow
        direction="Right"
        containerHovered={hovered}
        clickHandler={changeCardRight}
      />
      <span onClick={() => expandDescription()} className={`ClickForMore ${hovered ? 'ClickHovered' : 'NotClickHovered'}`}>+</span>
      <div className={`CardDescription ${hovered ? 'ContainerHovered' : 'ContainerNotHovered'}`}>{description}</div>
    </div>
  )
}

export default Card;
