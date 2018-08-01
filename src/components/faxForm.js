import React, { Component } from 'react';
import { TextField, Icon, Tabs, Tab } from '@material-ui/core';

const styles = {
  section: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
  },
  textField: {
      width: '20em',
      marginTop: '1em'
  },
  icon: {
    marginTop: '1em',
    fontSize: '2em'
  }
};

class FaxForm extends Component {
  state = { value: 0 };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  render() {
    return <section style={styles.section}>
      <Tabs indicatorColor='primary' value={this.state.value} onChange={this.handleChange}>
        <Tab label='Send'/>
        <Tab label='Recieve'/>
      </Tabs>
      <TextField style={styles.textField} label='Email'/>
      <TextField style={styles.textField} label='Phone Number'/>
      <Icon style={styles.icon}>arrow_drop_down</Icon>
    </section>;
  }
}

export default FaxForm;