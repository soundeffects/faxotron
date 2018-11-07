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
      <div style={ styles.paymentMargin }>
        <TextField
          label="Card Number"
          value={this.state.cardNumber}
          onChange={this.handleChange('cardNumber')}
          InputProps={{
            inputComponent: CardNumber,
          }}
        />
      </div>
      <div style={ styles.paymentMargin }>
        <TextField
          label="CVC"
          value={this.state.cvc}
          onChange={this.handleChange('cvc')}
          InputProps={{
            inputComponent: CVCNumber,
          }}
        />
      </div>
      <div style={ styles.paymentMargin }>
        <TextField
          label="Expiry Date"
          value={this.state.expiryDate}
          onChange={this.handleChange('expiryDate')}
          InputProps={{
            inputComponent: ExpiryNumber,
          }}
        />
      </div>
    </section>;
  }
}

export default PaymentInfo;
