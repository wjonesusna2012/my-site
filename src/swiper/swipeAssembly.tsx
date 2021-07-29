import React from 'react';
import _ from 'lodash';
import SwipeCard from './swipeCard';

import {  SwipeAssemblyProps,  SwipeAssemblyGridDataProps } from '../definitions/interfaces';

const StarView: React.FC<({starRating: number})> = ({ starRating }) => {
  const starList = [];
  for(let i = 0; i < 5; i++){
    starList.push(<span className={`${i < starRating ? 'goldStar' : 'blackStar'}`}>{'\u2605'}</span>);
  }
  return (
    <div className="wholeVertical">
      <div className="halfVertical">
        {starList.map(i => i)}
      </div>
      <div className="starRating halfVertical">
        {`${starRating} / 5`}
      </div>
    </div>
  );
};

const Descriptor: React.FC<({size: number, description: string, icon: string})> = ({size, description, icon}) => {

  return (
    <div className="wholeVertical" style={{position: 'absolute', width: `${size}px`, top: 0, left: 0}}>
      <div className="halfVertical">
        {description}
      </div>
      <div className="halfVertical">
        <img src={icon} style={{height: '70%', width: "clamp(0%, 100%)"}} />
      </div>
    </div>
  )
};


const SwipeAssembly: React.FC<SwipeAssemblyProps> = ({ swipeData }) => {
  const optionGroups: Array<string> = _.uniq(swipeData.map(x => x.optionGroup));
  const optionOrganizedData: SwipeAssemblyGridDataProps = {};

  optionGroups.forEach(oG => {
    optionOrganizedData[oG] = [];
  });

  swipeData.forEach(sD => {
    optionOrganizedData[sD.optionGroup].push({
      rating: sD.rating,
      icon: sD.icon,
      description: sD.description,
      title: sD.title,
      improvement: sD.improvement,
    });
  });

  return (
    <>
      {
        optionGroups.map(oG => {
          return (
            <>
            <div>{oG}</div>
            <div className="flexRow">
              {
                optionOrganizedData[oG].map(sD => {
                  return (
                    <div style={{width: '300px', height: '300px', padding: '10px'}}>
                      <SwipeCard 
                        rightElement={
                          <Descriptor 
                            size={300} 
                            description={sD.description} 
                            icon={sD.icon}
                          />
                        } 
                        leftElement={
                          <StarView starRating={sD.rating}/>
                        } 
                      />
                    </div>
                  )
              })}
          </div>
          </>
          )
        })
      }
    </>
  )
};

export default SwipeAssembly;