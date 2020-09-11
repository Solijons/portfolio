import MuiDialogActions from '@material-ui/core/DialogActions';
import { Theme, withStyles } from '@material-ui/core/styles';

/**
 * Component wraps the actions in Generic prompt.
 * @ignore
 */
const GenericPromptActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default GenericPromptActions;
