import React from 'react';
import { Link, Typography } from '@material-ui/core';

/**
 * Produces a copyright string (centered) with the current year and a
 * clickable link to Bayer Crop Science.
 * @returns {React.FunctionComponent}
 */
const Copyright: React.FunctionComponent = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.cropscience.bayer.com/">
        Bayer Crop Science
        </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
