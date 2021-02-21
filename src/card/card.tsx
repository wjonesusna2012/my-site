import React, { useState } from 'react';
import '../styles/card.css';
import Arrow from './arrow/arrow';

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
      <img src={`${imageName}`} onClick={() => expandDescription()}/>
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
      <div className={`CardDescription ${hovered ? 'ContainerHovered' : 'ContainerNotHovered'}`}>{description}</div> 
    </div>
  )
} 

export default Card;