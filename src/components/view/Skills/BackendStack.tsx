import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import expressImage from './assets/expressjs.png';
import mySqlImage from './assets/mysql.png';
import nodeImage from './assets/node.png';
import postgresqlImage from './assets/postgresql.png';

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
  { image: nodeImage, title: "Node", },
  { image: expressImage, title: "Express", },
  { image: postgresqlImage, title: "Postgresql", },
  { image: mySqlImage, title: "MySQL", },
];

export default function BackendStack() {
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
