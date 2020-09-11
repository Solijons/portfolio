import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import { IAppBarProps } from './interfaces';
import useStyles from './styles';

const AppBarHelpers: React.FunctionComponent<IAppBarProps> = (props) => {
  const classes = useStyles();
  const { handleDrawerOpen, open } = props;

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Solijon Sharipov
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarHelpers;
