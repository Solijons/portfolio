import { createStyles, Theme } from '@material-ui/core/styles';

/**
 * @ignore
 */
const styles = (theme: Theme) =>
  createStyles({
    closeButton: {
      color: theme.palette.grey[500],
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
    },
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
  });

export default styles;
