import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Link,
  Typography,
} from '@material-ui/core';

import PROJECT_INFO from './assets/projectInfo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    card: {
      maxHeight: 500,
    },
    actionCard: {
      padding: theme.spacing(2),
    },
    media: {
      backgroundSize: 'contain',
      height: 0,
      paddingTop: '56.25%', // 16:9,
    },
  }),
);



export default function ProjectCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {PROJECT_INFO.map((info) => {
          return (
            <Grid key={info.name} item xs={12} sm={3}>
              <Card square elevation={2}>
                <CardMedia
                  className={classes.media}
                  image={info.imagePath}
                  title="Contemplative Reptile"
                />
                <CardContent
                  style={{
                    height: "200px",
                  }}
                >
                  <Typography gutterBottom variant="h5" component="h2">
                    {info.name}
                  </Typography>

                  <Typography variant="subtitle2" color="textSecondary" component="h6">
                    {info.description}
                  </Typography>
                </CardContent>
                <Divider />
                <CardActions className={classes.actionCard}>
                  <Link
                    rel="noopener"
                    href={info.url}
                    target="_black"
                    underline="none"
                  >
                    Learn More
                   </Link>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
