import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

import Header from './header';
import Form from './form';

import theme from '../styles/theme';

TouchRipple.prototype.render = () => null;

class App extends Component {
  render() {
    return <MuiThemeProvider theme={theme}>
      <Header/>
      <Form/>
    </MuiThemeProvider>
  }
}

export default App;
