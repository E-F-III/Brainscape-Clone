import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { authenticate } from './store/session';

import ProtectedRoute from './components/auth/ProtectedRoute';

import NavBar from './components/NavBar';
import Splashpage from './components/Splashpage';
import Dashboard from './components/Dashboard';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path='/dashboard'>
          <Dashboard />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <NavBar />
          <Splashpage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
