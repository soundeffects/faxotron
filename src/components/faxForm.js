import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

const styles = {
    section: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    textField: {
        width: '20em'
    },
    press: {
        alignItems: 'center',
        justifyContent: 'end'
    }
}

class FaxForm extends Component {
  render() {
    return <section style={styles.section}>
      <TextField style={styles.textField} label='Email'/>
      <TextField style={styles.textField} label='Phone Number'/>
      <button style={styles.press}/>
    </section>
  };
}

export default FaxForm;