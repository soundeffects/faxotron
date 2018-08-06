import React, {Component} from 'react';

class CostStep extends Component {
  render() {
    if (this.props.sending) {
      return <p> This will cost you {this.props.cost} at {this.props.perCost} dollars a page due to your telephone region.</p>;
    } else {
      return <p> This will cost you {this.props.cost} at {this.props.perCost} a day for {this.props.days}.</p>;
    }
  }
}

export default CostStep;