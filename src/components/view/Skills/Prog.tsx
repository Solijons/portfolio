import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import cssImage from './assets/css.png';
import htmlImage from './assets/html.png';
import javaImage from './assets/java.png';
import jsImage from './assets/js.png';

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
  { image: cssImage, title: "Cascading Style Sheets", },
  { image: htmlImage, title: "HTML", },
  { image: jsImage, title: "Javascript", },
  { image: javaImage, title: "Java", },
];

export default function Prog() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {progLanguages.map((prgLan) => {
          return (
            <Grid
              key={prgLan.title}
              item
              xs={6}
              sm={3}
            >
              <CardMedia
                className={classes.media}
                image={prgLan.image}
                title={prgLan.title.toLocaleUpperCase()}
              />
              <CardContent>
                <Typography variant="h5" align="center">
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
