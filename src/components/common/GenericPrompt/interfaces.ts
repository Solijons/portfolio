import { PropTypes } from '@material-ui/core';
import { WithStyles } from '@material-ui/core/styles';
import styles from './style';


/**
 * Interface is used to create generic prompt header
 * @ignore
 */
export interface IGenericHeader extends WithStyles<typeof styles> {
    children: React.ReactNode;
    id: string;
    onClose: () => void;
}

export interface IGenericPrompt {
    actionColorButton?: PropTypes.Color;
    actionText?: string;
    body: JSX.Element[] | JSX.Element;
    closeColorButton?: PropTypes.Color;
    closeText?: string;
    id: string;
    onAction?: () => void;
    onClose?: () => void;
    open: boolean;
    title: string;
    variant?: 'text' | 'outlined' | 'contained';
}
