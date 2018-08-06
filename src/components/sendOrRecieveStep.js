import React, { Component } from 'react';
import { TextField, Tabs, Tab } from '@material-ui/core';
import PhoneInput from 'react-phone-number-input';
import '../styles/phone-styles.css';

import styles from '../styles/main';

class SendOrRecieveStep extends Component {
  state = {
    value: 0,
    color: 'primary'
  }

  handleTab(event, value) {
    const color = (value === 0) ? 'primary' : 'secondary';
    this.setState({ value, color });
  }

  render() {
    const { value, color, mode } = this.state;
    return <section style={styles.center}>
      <Tabs indicatorColor={color} value={value} onChange={this.handleTab}>
        <Tab label='Send'/>
        <Tab label='Recieve'/>
      </Tabs>
      <PhoneInput class style={styles.textField}
        placeholder="Recipient Phone Number"
        value={ this.state.phone }
        onChange={ phone => this.setState({ phone }) } />
      <TextField style={styles.textField} type='email' label='Email'/>
    </section>;
  }
}

export default SendOrRecieveStep;
