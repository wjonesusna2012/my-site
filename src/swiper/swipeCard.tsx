import React, { useState, useRef } from 'react';
import '../styles/swiper.css';



const SwipeCard: React.FC<({leftElement: any, rightElement: any})> = ({leftElement, rightElement}) => {
  const [xCoor, setXCoor] = useState(295);
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
    <div ref={wrapperRef} className="swipeCardWrapper" onMouseMove={mouseHandler} onMouseLeave={() => setXCoor(295)}>
      <div className="swipeCardLayerBottom"> 
        {leftElement}
      </div>
      <div style={{width: `${xCoor}px`}} className="swipeCardLayerTop">
        {rightElement}
      </div>
      <div style={{left:`${xCoor}px` }} className="swipeDivider" />
    </div>
  )
};

export default SwipeCard;