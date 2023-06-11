import React from 'react';
import WorkCard, { WorkCardProps } from './WorkCard';
import { Grid } from '@mui/material';

interface WorkCardListProps {
  workCardDetails: WorkCardProps[] 
}
export const WorkCardList: React.FC<WorkCardListProps> = ({workCardDetails}) => {
  return (
      <Grid container spacing={2}>
      {workCardDetails.map(wCD => {
        return (
          <Grid xs={12} md={6} lg={4} item>
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