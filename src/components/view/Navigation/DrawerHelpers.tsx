import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useTheme } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import clsx from 'clsx';
import React from 'react';
import { IDrawerProps } from './interfaces';
import useStyles from './styles';


const DrawerHelpers: React.FunctionComponent<IDrawerProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { compRoutes, handleDrawerClose, open } = props;

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {compRoutes.map((route) => (
          <Link
            key={route.path}
            href={`/${route.path}`}
            rel="noopener"
            color="inherit"
            underline="none"
          >
            <ListItem button >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText primary={route.path} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default DrawerHelpers;
