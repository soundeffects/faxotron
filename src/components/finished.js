import React from 'react';
import { Typography } from '@material-ui/core';
import styles from '../styles/main';

function Finished(mode) {
  var text;
  if (mode === 'sending') {
    text = 'Fax successfully sent!';
  } else {
    text = 'Your fax number has been set up! An email has been sent containing more details and verification.';
  }

  return <Typography style={ styles.steps } variant='subheading'>{ text }</Typography>;
}

export default Finished;
