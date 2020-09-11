import { makeStyles} from '@material-ui/core/styles';

/**
 * The StylesHook for the Login component.
 * @ignore
 */
const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    },
    form: {
        marginTop: theme.spacing(1),
        width: '100%', // Fix IE 11 issue.
    },
    image: {
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    paper: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        margin: theme.spacing(8, 4),
    },
    root: {
        height: '100vh',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default useStyles;
