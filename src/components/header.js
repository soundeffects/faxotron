import React, { Component } from 'react';
import { Button, Typography, Icon } from '@material-ui/core/';

import styles from '../styles/main';


class Header extends Component {
  render() {
    return <section>
      <header style={styles.header}>
        <Typography style={styles.title} variant='title'>The Fax-O-Tron</Typography>
        <Button>Help</Button>
      </header>
      <article style={styles.center}>
        <p style={styles.aboutParagraph}>
          Have you ever had to fax somebody in this modern age and searched online for a solution,
          only to be met with subscription services you won't ever use again? Well look no further.
        </p>
        <p style={styles.aboutParagraph}>
          The Fax-O-Tron, for a flat fee, will link your email to a fax number to either send or
          recieve how many faxes you pay for, no extra strings attached.
        </p>
      </article>
    </section>;
  }
}

export default Header;
