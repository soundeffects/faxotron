import React, { Component } from 'react';
import { TextField, Icon, Tabs, Tab, MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import theme from '../styles/theme';
import styles from '../styles/main';


class FaxForm extends Component {
  state = {
    value: 0,
    color: 'primary'
  };

  handleChange = (event, value) => {
    var color;
    if (value === 0) { color = 'primary' }
    else { color = 'secondary' }
    
    this.setState({ value, color });
  };
  
  render() {
    const { value, color } = this.state;
    const textFieldTheme = createMuiTheme({
      palette: {
        primary: { main: theme.palette[color].main }
      }
    });
    
    return <section style={styles.center}>
      <Tabs indicatorColor={color} value={value} onChange={this.handleChange}>
        <Tab label='Send'/>
        <Tab label='Recieve'/>
      </Tabs>
      <MuiThemeProvider theme={textFieldTheme}>
        <TextField color={color} style={styles.textField} label='Email'/>
        <TextField color={color} style={styles.textField} label='Phone Number'/>
      </MuiThemeProvider>
      <Icon style={styles.icon}>arrow_drop_down</Icon>
    </section>;
  }
}

export default FaxForm;