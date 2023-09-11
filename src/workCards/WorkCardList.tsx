import React from 'react';
import WorkCard, { WorkCardProps } from './WorkCard';
import { Grid } from '@mui/material';

interface WorkCardListProps {
  workCardDetails: WorkCardProps[]
}
export const WorkCardList: React.FC<WorkCardListProps> = ({workCardDetails}) => {
  return (
      <div style={{padding: '2em' }}>
      <Grid
        container
        spacing={6}
        justifyContent={"space-evenly"}
        sx={{overflowX: 'hidden'}}
      >
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
      </div>
  )
}

export default WorkCardList;
