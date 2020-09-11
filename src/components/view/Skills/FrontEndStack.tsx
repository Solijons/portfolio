import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import bootstrapImage from './assets/bootstrap.png';
import jqueryImage from './assets/jquery.png';
import materialUIImage from './assets/material-ui.png';
import preactImage from './assets/preact.png';
import reactImage from './assets/react.png';
import vueImage from './assets/vue.png';


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
  { image: reactImage, title: "React", },
  { image: vueImage, title: "Vue", },
  { image: materialUIImage, title: "Material-UI", },
  { image: bootstrapImage, title: "Bootstrap", },
  { image: jqueryImage, title: "Jquery", },
  { image: preactImage, title: "Preact", },
];

export default function FrontEndStack() {
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
              className="slide-in-left"
            >
              <CardMedia
                className={classes.media}
                image={prgLan.image}
                title={prgLan.title.toLocaleUpperCase()}
              />
              <CardContent>
                <Typography
                  variant="h5"
                  align="center"
                  noWrap
                >
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
