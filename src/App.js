import React, { Component } from 'react';
import { ApplicationWrapper, Flexbox } from "./components/UI/Layouts";

class App extends Component {
  render() {
    return (
      <ApplicationWrapper>
        <Flexbox>
          <h3>Evergreen UI</h3>
          <h3>Latest Library</h3>
        </Flexbox>
      </ApplicationWrapper>
    );
  }
}

export default App;
