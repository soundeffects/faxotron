import React, { Component } from 'react';
import { Button, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import { green, blue } from '../styles/themes'

class SendOrRecieve extends Component {
  render() {
    const buttonTheme = createMuiTheme({
      palette: {
        primary: { main: green.palette.primary.main },
        secondary: { main: blue.palette.primary.main }
      }
    })

    return <MuiThemeProvider theme={buttonTheme}>
      <Button variant='contained' color='primary' onClick={() => this.props.handleView(true, green)}>Send</Button>
      <Button variant='contained' color='secondary' onClick={() => this.props.handleView(true, blue)}>Recieve</Button>
    </MuiThemeProvider>
  }
}

export default SendOrRecieve;
