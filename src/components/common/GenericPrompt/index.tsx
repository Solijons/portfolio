import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import React, { FunctionComponent } from 'react';

import GenericPromptActions from './GenericPromptActions';
import GenericPromptBody from './GenericPromptBody';
import GenericPromptHeader from './GenericPromptHeader';
import { IGenericPrompt } from './interfaces';

/**
 *
 * A component accepts id, title, body, open,
 * onAction, onClose, actionText, closeText
 * using IGenericPrompt interface.
 *
 * If props are provided, Generic will be toggled in the Display
 * using Dialog Component.
 *
 * **see** _[IGenericPrompt](/pages/TPD-Hawaii/interfaces/igenericprompt.html)_
 *
 * @param props
 */
const GenericPrompt: FunctionComponent<IGenericPrompt> = (props) => {

  const handleClose = () => {
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog" open={props.open} fullWidth>
        <GenericPromptHeader id={`${props.id}-title`} onClose={handleClose}>
          {props.title}
        </GenericPromptHeader>

        <GenericPromptBody dividers>
          {props.body}
        </GenericPromptBody>

        <GenericPromptActions>
          {props.closeText && props.onClose && (
            <Button
              id={props.closeText}
              onClick={handleClose}
              color={props.closeColorButton ? props.closeColorButton : "primary"}
              variant={props.variant ? props.variant : "outlined"}
            >
              {props.closeText}
            </Button>
          )}

          {props.actionText && props.onAction && (
            <Button
              autoFocus
              id={props.actionText}
              onClick={props.onAction}
              color={props.actionColorButton ? props.actionColorButton : "primary"}
              variant={props.variant ? props.variant : "outlined"}
            >
              {props.actionText}
            </Button>
          )}
        </GenericPromptActions>

      </Dialog>
    </div>
  );
};

export default GenericPrompt;
