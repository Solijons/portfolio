import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { FunctionComponent, useState } from 'react';

import { SignInResponse } from '../../../services/IAM/enums';
import Copyright from '../Copyright';
import { ISignIn } from './interfaces';

import useStyles from './style';

/**
 * A component that accepts user credentials (username and password),
 * then uses an IAM Service to authenticate and validate the users.
 *
 * If the user is authorized, and a redirectUrl is provided, they will
 * be sent to the redirectUrl.
 *
 * **see** _[IAMFactory](/pages/TPD-Hawaii/toga/classes/iamfactory.html)_
 * @param props
 */
const SignIn: FunctionComponent<ISignIn> = (props) => {
  const classes = useStyles();


  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.id.toLowerCase() === 'username') {
      setUsername(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const signInHandler = async () => {
    const res = await props.iamService.signIn({
      password,
      username,
    });

    if (res === SignInResponse.Ok) {
      window.location.pathname = props.redirectUrl;
    }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={updateInput}
              autoFocus
              value={username}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={updateInput}
              autoComplete="current-password"
              value={password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signInHandler}
            >
              Sign In
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
