import React from 'react';
import AppBar from './AppBarHelpers';
import Drawer from './DrawerHelpers';
import { INavigationProps } from './interfaces';

export default function Navigation(props: INavigationProps) {
  const [open, setOpen] = React.useState(false);
  const { compRoutes } = props;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <AppBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />

      <Drawer
        compRoutes={compRoutes}
        open={open}
        handleDrawerClose={handleDrawerClose}
      />
    </>
  );
}
