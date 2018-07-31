import React, { Component } from 'react';

import Header from './header';
import FaxForm from './faxForm';

class App extends Component {
  render() {
    return [<Header/>, <FaxForm/>];
  }
}

export default App;
