import React, { Component } from 'react';
import { Typography, Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { green, blue } from '../styles/themes';
import styles from '../styles/main';

class SendOrReceive extends Component {
  render() {
    const buttonTheme = createMuiTheme({
      palette: {
        primary: { main: green.palette.primary.main },
        secondary: { main: blue.palette.primary.main }
      }
    })

    return <MuiThemeProvider theme={buttonTheme}>
      <section style={styles.center}>
        <Typography style={styles.title} variant='title'>The Fax-O-Tron</Typography>
        <article>
          <Typography variant='body1' style={styles.aboutParagraph}>
            Have you ever had to fax somebody in this modern age and searched online for a solution,
            only to be met with subscription services you won't ever use again? Well look no further.
          </Typography>
          <Typography variant='body1' style={styles.aboutParagraph}>
            The Fax-O-Tron will let you send or receive however many faxes you want for a one-time
            charge.
          </Typography>
          <Typography variant='subheading' style={styles.subheading}>
            Let's get started.
          </Typography>
        </article>
        <div className='wrapper'>
          <Button
            style={styles.button}
            variant='contained'
            color='primary'
            onClick={() => this.props.handleView('underway', green, 'sending')}>
            Send
          </Button>
          <Button
            style={styles.button}
            variant='contained'
            color='secondary'
            onClick={() => this.props.handleView('underway', blue, 'receiving')}>
            Receive
          </Button>
        </div>
      </section>
    </MuiThemeProvider>
  }
}

export default SendOrReceive;
