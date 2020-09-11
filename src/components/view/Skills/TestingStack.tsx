import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import {
  CardContent,
  Typography,
} from '@material-ui/core';
import chaiImage from './assets/chai.png';
import cucumberlImage from './assets/cucumber.png';
import mochaImage from './assets/mocha.png';
import seleniumImage from './assets/selenium.png';

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
  { image: seleniumImage, title: "Selenium", },
  { image: mochaImage, title: "Mocha", },
  { image: chaiImage, title: "Chai", },
  { image: cucumberlImage, title: "Cucumber", },
];

export default function TestingStack() {
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
              className="slide-in-left"
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
