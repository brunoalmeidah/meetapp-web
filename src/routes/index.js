import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Profile from '~/pages/Profile';
import Detail from '~/pages/Meetup/Detail';
import Register from '~/pages/Meetup/Register';

// import { Container } from './styles';

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/meetup/detail" component={Detail} isPrivate />
      <Route path="/meetup/register" component={Register} isPrivate />
    </Switch>
  );
}
