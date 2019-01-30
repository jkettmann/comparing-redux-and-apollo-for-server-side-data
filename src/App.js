import React, { Component } from 'react';
import ApolloApp from './graphql/ApolloApp';
import ReduxApp from './redux/ReduxApp';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h2>Apollo App</h2>

          <ApolloApp />
        </div>

        <div>
          <h2>Redux App</h2>

          <ReduxApp />
        </div>
      </div>
    );
  }
}

export default App;
