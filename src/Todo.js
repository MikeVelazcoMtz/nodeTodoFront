import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

class Todo extends Component {
  render() {
    return (
      <Grid.Row verticalAlign="middle" textAlign="center" centered="true" columns="1" container="true">
        <Grid.Column>
          <h1>Hello Todos</h1>
        </Grid.Column>
      </Grid.Row>
    );
  }
}

export default Todo;
