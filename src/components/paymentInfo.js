import React, { Component } from 'react';
import { Typography, TextField } from '@material-ui/core';

import { CardNumber, CVCNumber, ExpiryNumber } from './numberFormats';

import styles from '../styles/main';

class PaymentInfo extends Component {
  state = {
    cardNumber: '',
    cvc: '',
    expiryDate: ''
  };
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return <section style={styles.center}>
      <Typography>Total Cost: {'$X'}</Typography>
      <TextField
        styles={styles.textField}
        label="Card Number"
        value={this.state.cardNumber}
        onChange={this.handleChange('cardNumber')}
        InputProps={{
          inputComponent: CardNumber,
        }}
      />
      <TextField
        styles={styles.textField}
        label="CVC"
        value={this.state.cvc}
        onChange={this.handleChange('cvc')}
        InputProps={{
          inputComponent: CVCNumber,
        }}
      />
      <TextField
        styles={styles.textField}
        label="Expiry Date"
        value={this.state.expiryDate}
        onChange={this.handleChange('expiryDate')}
        InputProps={{
          inputComponent: ExpiryNumber,
        }}
      />
    </section>;
  }
}

export default PaymentInfo;
