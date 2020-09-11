import {
  AppBar,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';

import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

  return (
    <React.Fragment>
      <AppBar
        position="static"
        elevation={0}
        style={{
          color: 'white',
        }}
      >
        <Toolbar>
          <Typography variant="h6">
            Projects
        </Typography>
        </Toolbar>
      </AppBar>
      <Paper square
        style={{
          backgroundColor: '#f1dfd1',
          backgroundImage: 'linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)',
        }}>
        <ProjectCard />
      </Paper>
    </React.Fragment>
  );
};

export default Projects;
