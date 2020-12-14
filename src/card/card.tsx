import React from 'react';
import '../styles/card.css';

interface CardProps {
  description: string,
  imageName: string,
}

const Card: React.FC<CardProps> = ({ description, imageName }) => {
  return (
    <div className="CardContainer">
    {/* <img src={`../images/${imageName}`} /> */}
      <img src="https://unsplash.it/500/500" />
      <div className="CardDescription">{description}</div> 
      <div className="LeftArrow">&lt;-</div>
      <div className="RightArrow">-&gt;</div>
    </div>
  )
} 

export default Card;