import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Header from './header';
import FaxForm from './faxForm';

import theme from '../styles/theme';

class App extends Component {
  render() {
    return <MuiThemeProvider theme={theme}>
      <Header/>
      <FaxForm/>
    </MuiThemeProvider>
  }
}

export default App;
