import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
// import { Container } from './styles';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
}
