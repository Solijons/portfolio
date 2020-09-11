import { AppBar, Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://solijon.netlify.app/">
        SS
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  grid: {
    textAlign: 'center',
    padding: '0!important',
  },
  footer: {
    backgroundColor: '#f1dfd1',
    backgroundImage: 'linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%)',
  },
  root: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  toolbar: {
    minHeight: 128,
  },

  link: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(2),
    }
  }

}));

export default function Footer() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      elevation={3}
      className={classes.footer}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.grid}>
            <Link href="https://www.linkedin.com/in/soli-sharipov/" className={classes.link}>
              <LinkedInIcon fontSize="large" style={{ color: '#1976d2' }} />
            </Link>
            <Link href="https://twitter.com/solijons96" className={classes.link}>
              <TwitterIcon fontSize="large" />
            </Link>
            <Link href="https://github.com/Solijons" className={classes.link}>
              <GitHubIcon fontSize="large" color="inherit" style={{ color: 'black' }} />
            </Link>
          </Grid>

          <Grid item xs={12} className={classes.grid}>
            <Copyright />
          </Grid>

        </Grid>

      </Toolbar>
    </AppBar>
  );
}
