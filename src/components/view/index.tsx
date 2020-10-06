import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import Intro from './Intro';

import {
  Drawer, Grid, Hidden, IconButton, List, ListItem, ListItemText
} from '@material-ui/core';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import Footer from './Footer';
import Blog from './Blog';

interface IProps {
  children?: React.ReactElement;
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: '#7fcec5',
      backgroundImage: 'linear-gradient(315deg, #7fcec5 0%, #14557b 74%)',
    },
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      color: '#fff',
    },
  }),
);

function ScrollTop(props: IProps) {
  const { children, window } = props;

  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function BackToTop(props: IProps) {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00b0ff'
      },
    },
  });
  theme = responsiveFontSizes(theme);

  const navigationProps = ['Intro', 'Blog', 'About me', 'Portfolio', 'Contact'];
  const comps = [<Intro />, <Blog />, <Skills />, <Projects />, <Contact />, <Footer />];
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = (
    event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
    index: number,
    close?: boolean
  ) => {

    const anchor = ((event.target as HTMLButtonElement).ownerDocument || document).getElementById(
      `#${index}`,
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  };

  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
      <Hidden smDown implementation="css">
        <CssBaseline />
        <AppBar className={classes.appBar} elevation={6}>
          <Container>
            <Toolbar>
              <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
              >
                {navigationProps.map((navProp, index) => {
                  return (
                    <IconButton
                      key={navProp}
                      style={{
                        color: '#fff'
                      }}
                      onClick={(event: React.MouseEvent<HTMLButtonElement>) => handleScroll(event, index)}
                    >
                      <Typography variant="h6">{navProp}</Typography>
                    </IconButton>
                  );
                })}
                <div>
                  <Link href="https://www.linkedin.com/in/soli-sharipov/" className={classes.icon}>
                    <LinkedInIcon fontSize="large" />
                  </Link>
                  <Link href="https://twitter.com/solijons96" className={classes.icon}>
                    <TwitterIcon fontSize="large" />
                  </Link>
                  <Link href="https://github.com/Solijons" className={classes.icon}>
                    <GitHubIcon fontSize="large" color="inherit" />
                  </Link>
                </div>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
      </Hidden>

      <nav aria-label="sidebar links">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="js">
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon style={{ color: '#fff' }} />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <List>
              {navigationProps.map((navProp, index) => {
                return (
                  <ListItem
                    key={navProp}
                    button
                    onClick={(event: any) => handleScroll(event, index, true)}
                  >
                    <ListItemText primary={navProp} />
                  </ListItem>
                );
              })}
            </List>
          </Drawer>
        </Hidden>
      </nav>
      {comps.map((component, index) => <Box id={`#${index}`} key={index}>{component}</Box>)}

      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
}
