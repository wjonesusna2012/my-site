import React from 'react';
import { Stack, Chip, Typography, Card, CardContent, Link, CardHeader }from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

export interface ProjectCardProps {
    projectURL: string,
    languagesURL: string,
    title: string,
    projectDescription: string,
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  projectURL,
  languagesURL,
  title,
  projectDescription,
}) => {
  const [languages, setLanguages] = React.useState<string[]>([]);
  React.useEffect(() => {
      fetch(languagesURL).then(async res => {
          const resultJSON: { [key: string]: number } = await res.json();
          const langs = Object.keys(resultJSON);
          setLanguages(langs);
      })}, [languagesURL]);
  return (
    <Card>
      <CardHeader
        title={title}
        action={
          <Link target="_blank" href={projectURL}>
            <OpenInNew />
          </Link>
        }
      />
      <CardContent>
        <Typography paragraph align="left" variant="body1">
          {projectDescription}
        </Typography>
        <Stack direction="row" spacing={1}>
          {languages.map(lang => (
            <Chip size='small' variant="outlined" label={lang} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default ProjectCard;
