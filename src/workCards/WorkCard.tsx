import React from 'react';
import { Typography, Card, ListItem, CardContent, CardHeader, CardMedia, List, ListItemText, ListItemIcon } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Check from '@mui/icons-material/Check';

export interface WorkCardProps {
  title: string;
  durationString: string;
  thumbnailSource: string;
  mediaSource: string;
  workSummary: string;
  detailList: string[];
}
const WorkCard: React.FC<WorkCardProps> = ({ 
  title,
  durationString,
  thumbnailSource,
  mediaSource,
  workSummary,
  detailList,

}) => {
  return (
    <Card>
      <CardHeader 
        title={title}
        subheader={durationString}
        avatar={<Avatar src={thumbnailSource} />}
      />
      <CardMedia 
        component="img"
        image={mediaSource}
        height="150"
        alt={`${title} Image`}
      />
      <CardContent>
        <Typography paragraph align="left" variant="body1">
          {workSummary}
        </Typography>
        <List>
          {detailList.map(d => (
            <ListItem>
              <ListItemIcon>
                <Check/>
              </ListItemIcon>
              <ListItemText primary={d} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default WorkCard;