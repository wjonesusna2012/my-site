import React, { useState, useRef } from 'react';
import '../styles/swiper.css';
import { CardContent, Card, Chip, CardHeader, Button, CardActions, Typography } from '@mui/material';



const SwipeCard: React.FC<({
  leftElement: any,
  rightElement: any,
  title: string,
  dateRange: Date,
  detailText: string,
  description: string,
  chipLabel: string,
})> = ({title, description, chipLabel, dateRange, leftElement, rightElement, detailText}) => {
  const [expanded, setExpanded] = useState(false);
  const [xCoor, setXCoor] = useState(295);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const mouseHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if(wrapperRef !== null && wrapperRef.current !== null) {
      const boundedX = wrapperRef.current.getBoundingClientRect();
      if (Math.abs(e.clientX - boundedX.left - 5) >= 2) {
        setXCoor(e.clientX - boundedX.left - 5);
      }
    }
  }
  return (
    <Card>
      <CardHeader
        title={title}
        subheader={"Since " + dateRange.toLocaleDateString('en-us', {year: 'numeric', month: 'long'})}
        avatar={
            <Chip label={chipLabel}/>
        }
      />
      <CardContent>
          <div style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center'
            }}>
              <div ref={wrapperRef} className="swipeCardWrapper" onMouseMove={mouseHandler} onMouseLeave={() => setXCoor(295)}>
                <div className="swipeCardLayerBottom">
                  {leftElement}
                </div>
                <div style={{width: `${xCoor}px`}} className="swipeCardLayerTop">
                  {rightElement}
                </div>
                <div style={{left:`${xCoor}px` }} className={`swipeDivider${xCoor === 295 ? 'Invisible' : ''}`} />
              </div>
          </div>
        <Typography>
          {description}
        </Typography>
      {
        expanded && detailText !== '' && (
          <>
            <Typography style={{ padding: 10, borderRadius: 5, margin: "10px 0", justifyContent: "start", backgroundColor: "var(--alt-text)", color: "var(--main-text)"  }}>
                Improvement
            </Typography>
            <Typography>
              {detailText}
            </Typography>
          </>
        )
      }
      </CardContent>
      { detailText !== '' && (
          <CardActions>
            <Button onClick={() => setExpanded(e => !e)}>
              {expanded ? 'Less' : 'More'}
            </Button>
          </CardActions>
      )}
    </Card>
  )
};

export default SwipeCard;
