import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import aws from './assets/aws.png';
import dockerImage from './assets/docker.png';
import gitImage from './assets/git.png';
import jenkinsImage from './assets/jenkins.png';
import npmlImage from './assets/npm.png';
import typescriptImage from './assets/typescript.png';

import {
  CardContent,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      backgroundSize: 'contain',
      paddingTop: '56.25%',
    },
    root: {
      flexGrow: 1,
    },
  }),
);

const progLanguages = [
  { image: aws, title: "AWS (S3, Fargate, EC2)", },
  { image: dockerImage, title: "Dcoker", },
  { image: npmlImage, title: "Npm", },
  { image: gitImage, title: "Git", },
  { image: jenkinsImage, title: "Jenkins", },
  { image: typescriptImage, title: "Typescript", },
];

export default function OthersStack() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {progLanguages.map((prgLan) => {
          return (
            <Grid
              key={prgLan.title}
              item
              xs={4}
              sm={2}
            >
              <CardMedia
                className={classes.media}
                image={prgLan.image}
                title={prgLan.title.toLocaleUpperCase()}
              />
              <CardContent>
                <Typography variant="h5" align="center" noWrap>
                  {prgLan.title.toLocaleUpperCase()}
                </Typography>
              </CardContent>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
