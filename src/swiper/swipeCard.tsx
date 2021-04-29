import React, { useState, useRef } from 'react';
import '../styles/swiper.css';

const SwipeCard: React.FC<({leftText: string, leftPicture: string, rightText: string, rightPicture: string})> = ({leftText, leftPicture, rightText, rightPicture}) => {
  const [xCoor, setXCoor] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const mouseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if(wrapperRef !== null && wrapperRef.current !== null) {
      const boundedX = wrapperRef.current.getBoundingClientRect();
      if (Math.abs(e.clientX - boundedX.left - 5) >= 2) {
        setXCoor(e.clientX - boundedX.left - 5);
      }
    }
    console.log(e.clientX);
  }
  return (
    <div ref={wrapperRef} className="swipeCardWrapper" onMouseMove={mouseHandler}>
      <div className="swipeCardLayerBottom"> 
        <h1>
          {leftText}
        </h1>
      </div>
      <div style={{width: `${xCoor}px`}} className="swipeCardLayerTop">
        <h1>
          {rightText}
        </h1>
      </div>
      <div style={{left:`${xCoor}px` }} className="swipeDivider" />
    </div>
  )
};

export default SwipeCard;