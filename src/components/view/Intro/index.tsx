import {
  Box,
  Link,
  Typography
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // alignContent: "center",
      // backgroundColor: '#f5f5f5',
      // display: "grid",
      flexGrow: 1,
      height: '100vh',
    },
    center: {
      marginLeft: '0',
      marginRight: '0',
      maxWidth: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '33.333333%',
      },
    }
  }),
);




const Intro = () => {
  const classes = useStyles();

  return (
    <React.Fragment >
      <div className={classes.root + " image-box"} id="back-to-top-anchor">
        <Grid container>
          <Grid
            item
            xs={12}
            className="slide-in-left"
          >
            <Typography variant="h5" gutterBottom align="center" className={classes.center}>
              <Box letterSpacing={3} m={3}>
                Hey, I'm Soli, nice to meet you!
              I am currently wokring as Software Engineer, Front End <b />
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://career.bayer.com/en/career"
                  color="inherit"
                  underline="none"
                >
                  @Bayer
              </Link>
                {' '}
                and cofounder of
                {' '}
                <Link
                  target="_blank"
                  rel="noopener"
                  href="https://joinbetterblock.com/"
                  color="inherit"
                  underline="none"
                >
                  @BetterBlock.
              </Link>
              </Box>
            </Typography>
          </Grid>

          {/* <Grid
            item
            xs={12}
            sm={6}
          >
            <CardMedia
              className={classes.media}
              image={svgBiz}
              title="Contemplative Reptile"
            />
          </Grid> */}

        </Grid>
      </div>
    </React.Fragment >
  );
};

export default Intro;
