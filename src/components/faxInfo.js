import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PhoneInput from 'react-phone-number-input';
import '../styles/phone-styles.css';

import styles from '../styles/main';

class FaxInfo extends Component {
  state = {};

  render() {
    return <section style={styles.center}>
      <PhoneInput style={styles.textField}
        placeholder="Recipient Phone Number"
        value={ this.state.phone }
        onChange={ phone => this.setState({ phone }) } />
      <TextField style={styles.textField} type='email' label='Email'/>
    </section>;
  }
}

export default FaxInfo;
