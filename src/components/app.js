import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

import Header from './header';
import Form from './form';
import SendOrRecieve from './sendOrRecieve';

import { green, blue } from '../styles/themes';

TouchRipple.prototype.render = () => null;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: green,
      form: false
    };

    this.handleView = this.handleView.bind(this);
  };

  handleView(form, theme = this.state.theme) {
    this.setState({ theme, form });
  }

  render() {
    return <MuiThemeProvider theme={this.state.theme}>
      <Header/>
      {this.state.form ? <Form handleView={this.handleView}/> : <SendOrRecieve handleView={this.handleView}/>}
    </MuiThemeProvider>
  }
}

export default App;
