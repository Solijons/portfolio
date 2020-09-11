import {
  AppBar,
  Box,
  Divider,
  Paper,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';
import BackendStack from './BackendStack';
import FrontEndStack from './FrontEndStack';
import OthersStack from './OthersStack';
import Prog from './Prog';
import TestingStack from './TestingStack';

const Skills = () => {
  const skillSet = [
    { name: "Languages", component: <Prog /> },
    { name: "Frontend", component: <FrontEndStack /> },
    { name: "Backend", component: <BackendStack /> },
    { name: "Testing", component: <TestingStack /> },
    { name: "Others", component: <OthersStack /> },
  ];

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
            Skills
        </Typography>
        </Toolbar>
      </AppBar>
      <Paper square>
        {skillSet.map((skill) => {
          return (
            <div key={skill.name} >
              <Typography variant="h4" align="left"
                style={{ padding: '1px' }}
              >
                <Box fontWeight="fontWeightBold"
                  letterSpacing={4}
                  m={3}
                >
                  {skill.name}
                </Box>
              </Typography>
              <Divider />
              <br />
              {skill.component}
            </div>
          );
        })}
      </Paper>
    </React.Fragment>
  );
};

export default Skills;
