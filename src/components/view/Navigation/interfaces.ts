export interface IAppBarProps {
  handleDrawerOpen: () => void;
  open: boolean;
}

export interface IDrawerProps {
  compRoutes: IRoutes[];
  handleDrawerClose: () => void;
  open: boolean;
}

export interface IRoutes {
  icon: JSX.Element;
  path: string;
}

export interface INavigationProps {
  compRoutes: IRoutes[];
}
