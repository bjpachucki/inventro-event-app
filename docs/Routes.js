import React from 'react';
import { Route, Switch } from 'react-router-dom';


class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    );
  }
}

export default Routes;
