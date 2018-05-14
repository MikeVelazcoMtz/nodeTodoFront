import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
import './App.css';
import {UISref} from '@uirouter/react';

class App extends Component {
  render() {
    return (
      <Grid.Row verticalAlign="middle" textAlign="center" centered="true" columns="1" container="true">
        <Grid.Column>
          <h1>Hello React</h1>
        </Grid.Column>
        <UISref to="todo">
          <a>Todo</a>
        </UISref>
      </Grid.Row>
    );
  }
}

export default App;
