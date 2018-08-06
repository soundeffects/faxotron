import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PhoneInput from 'react-phone-number-input';
import '../styles/phone-styles.css';

import styles from '../styles/main';

class FaxInfo extends Component {
  state = {};
  
  onFileLoad = (e, file) => console.log(e.target.result, file.name);
  
  modeRender() {
    if (this.props.mode === 'sending') {
      return [
        <PhoneInput style={styles.textField}
          placeholder="Recipient Phone Number"
          value={ this.state.phone }
          onChange={ phone => this.setState({ phone }) }
        />,
        <input type='file' style={styles.chooseFile}/>
      ];
    } else {
      return [
        <TextField style={styles.textField} type='email' label='Email'/>,
        <TextField
          style={styles.textField}
          type='date'
          label='Expected Receiving Date'
          InputLabelProps={{
            shrink: true,
          }}
        />
        ];
    }
  }

  render() {
    return <form style={styles.center} noValidate>{ this.modeRender() }</form>;
  }
}

export default FaxInfo;
