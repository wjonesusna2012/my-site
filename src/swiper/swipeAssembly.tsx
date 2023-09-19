import React from 'react';
import _ from 'lodash';
import SwipeCard from './swipeCard';

import {  SwipeAssemblyProps,  SwipeAssemblyGridDataProps } from '../definitions/interfaces';
import { Grid } from '@mui/material';

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

const Descriptor: React.FC<({size: number, title: string, icon: string})> = ({size, title, icon}) => {

  return (
    <div className="wholeVertical" style={{
        position: 'absolute',
        width: `${size - 10}px`,
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        padding: 5,
      }}>
      <img alt={title} src={icon} style={{ objectFit: 'contain', maxHeight: '100%', maxWidth: '100%', width: 'auto', height: 'auto' }} />
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
      startDate: sD.startDate,
      externalLink: sD.externalLink,
    });
  });

  return (
    <div  className="CardDescriptionContainer">
      <Grid container spacing={6}>
      {
        optionGroups.map(oG => {
          return (
            <>
              {
                optionOrganizedData[oG].map(sD => {
                  return (
                    <Grid item xs={12} md={6} lg={4} xl={3}>
                      <SwipeCard
                        chipLabel={oG}
                        title={sD.title}
                        dateRange={sD?.startDate ?? new Date('02-01-1990')}
                        description={sD.description}
                        rightElement={
                          <Descriptor
                            size={300}
                            title={sD.title}
                            icon={sD.icon}
                          />
                        }
                        leftElement={
                          <StarView starRating={sD.rating}/>
                        }
                        detailText={sD.improvement}
                        externalLink={sD.externalLink}
                      />
                    </Grid>
                  )
              })}
          </>
          )
        })
      }
      </Grid>
    </div>
  )
};

export default SwipeAssembly;
