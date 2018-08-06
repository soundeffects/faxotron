import React, { Component } from 'react';
import { Typography, MuiThemeProvider } from '@material-ui/core';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';

import Form from './form';
import SendOrRecieve from './sendOrRecieve';

import styles from '../styles/main';

TouchRipple.prototype.render = () => null;


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: null,
      progress: 'not started',
      mode: 'sending'
    };

    this.handleView = this.handleView.bind(this);
  }

  handleView(progress, theme = this.state.theme, mode = this.state.mode) {
    this.setState({ theme, progress, mode });
  }
  
  formRender() {
    switch(this.state.progress) {
      case 'not started':
        return <SendOrRecieve handleView={this.handleView}/>;
      case 'underway':
        return <Form mode={this.state.mode} handleView={this.handleView}/>;
      case 'finished':
        return <Typography variant='subheading'>You've finished!</Typography>;
      default:
        return <div>error</div>;
    }
  }

  render() {
    return <MuiThemeProvider theme={this.state.theme}>
      { this.formRender() }
    </MuiThemeProvider>;
  }
}

export default App;
