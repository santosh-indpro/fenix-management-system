import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../Login/login';

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={LoginPage} />
    </main>
  </div>
);

export default App;
