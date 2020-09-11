import MuiDialogContent from '@material-ui/core/DialogContent';
import { Theme, withStyles } from '@material-ui/core/styles';

/**
 * Component wraps the body content in Generic prompt.
 * @ignore
 */
const GenericPromptBody = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default GenericPromptBody;
