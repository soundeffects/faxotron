import React, { Component } from 'react';
import { Button, Typography, Icon } from '@material-ui/core/';


const styles = {
  header: { 
    display: 'flex',
    padding: '1em',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    fontSize: '2em'
  },
  aboutWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  aboutParagraph: {
    width: '40em',
    margin: '0.5em'
  },
  icon: {
    fontSize: '2em'
  }
};


class Header extends Component {
  render() {
    return <section>
      <header style={styles.header}>
        <Typography style={styles.title} variant='title'>The Fax-O-Tron</Typography>
        <Button>Help</Button>
      </header>
      <article style={styles.aboutWrapper}>
        <p style={styles.aboutParagraph}>
          Have you ever had to fax somebody in this modern age and searched online for a solution,
          only to be met with subscription services you won't ever use again? Well look no further.
        </p>
        <p style={styles.aboutParagraph}>
          The Fax-O-Tron, for a one-time charge, will link your email to a fax number to either 
          send or recieve a set amount of faxes, no extra strings attached.
        </p>
        <Icon style={styles.icon}>arrow_drop_down</Icon>
      </article>
    </section>;
  }
}

export default Header;