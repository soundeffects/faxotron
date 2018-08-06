import React, {Component} from 'react';
import { Typography } from '@material-ui/core';

import styles from '../styles/main';

class CostStep extends Component {
  modeRender() {
    if (this.props.mode === 'sending') {
      return <Typography variant='subheading'>
        This will cost you {'$X'} at {'$Y'} a page due to your telephone region.
      </Typography>;
    } else {
      return <Typography variant='subheading'>
        This will cost you {'$X'} at {'$Y'} a day for {'Z'} days.
      </Typography>;
    }
  }
  
  render() {
    return <section style={styles.center}>
      { this.modeRender() }
    </section>
  }
}

export default CostStep;