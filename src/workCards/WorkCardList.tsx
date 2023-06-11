import React from 'react';
import { workCardDetails } from './workCardInput';
import WorkCard from './WorkCard';
import { Grid } from '@mui/material';
export const WorkCardList = () => {
  return (
      <Grid container spacing={2}>
      {workCardDetails.map(wCD => {
        return (
          <Grid xs={12} md={6} lg={4} xl={3} item>
            <WorkCard 
              title={wCD.title}
              durationString={wCD.durationString}
              thumbnailSource={wCD.thumbnailSource}
              mediaSource={wCD.mediaSource}
              workSummary={wCD.workSummary}
              detailList={wCD.detailList}
            />
          </Grid>
        )
      })}
      </Grid>
  )
}

export default WorkCardList;