import React from 'react';
import { Grid } from '@mui/material';
import { components } from '@octokit/openapi-types';
import ProjectCard from './ProjectCard';
type ResponseEndpointResponseType = Array<components['schemas']['minimal-repository']>;

export const ProjectCardList: React.FC<{}> = () => {
  const [projects, setProjects] = React.useState<ResponseEndpointResponseType>([]);
  React.useEffect(() => {
      fetch('https://api.github.com/users/wjonesusna2012/repos').then(async res => {
          const resultJSON: ResponseEndpointResponseType = await res.json();
          const projs = resultJSON.filter(r => r!.owner!.login === 'wjonesusna2012')
          setProjects(projs);
      })
  }, []);
  React.useEffect(() => { console.log(projects) }, [projects]);
  return (
      <div style={{padding: '2em' }}>
      <Grid
        container
        spacing={6}
        sx={{overflowX: 'hidden'}}
      >
        {projects.map(proj => {
            return (
                <Grid item xs={12} md={6} lg={4} >
                    <ProjectCard
                        languagesURL={proj.languages_url}
                        title={proj.name}
                        projectURL={proj.html_url}
                        projectDescription={proj.description ?? ''}
                    />
                </Grid>
            );
        })}
      </Grid>
      </div>
  )
}

export default ProjectCardList;
