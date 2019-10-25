import React from 'react';
import { Router } from 'react-router-dom';
import Route from './routes';
import history from './services/history';
import './config/ReactotronConfig';
// import { Container } from './styles';

export default function App() {
  return (
    <Router history={history}>
      <Route />
    </Router>
  );
}
