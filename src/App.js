import React, { Component } from 'react';
import { ApplicationWrapper, Flexbox } from "./components/UI/Layouts";
import { SearchInput } from 'evergreen-ui'
class App extends Component {
  render() {
    return (
      <ApplicationWrapper>
        <SearchInput placeholder="Filter traits..." width="100%" />
        <Flexbox>
          <h3>Evergreen UI</h3>
          <h3>Latest Library</h3>
        </Flexbox>
      </ApplicationWrapper>
    );
  }
}

export default App;
