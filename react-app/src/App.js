import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Splashpage from './components/Splashpage';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';

import UserClassList from './components/testComponents/sessionClasses';
import DeckList from './components/testComponents/decks';

import { authenticate } from './store/session';
import CardList from './components/testComponents/cards';

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
        {/* Test Components, refactor later */}
        <Route path='/classes/:classId/decks'>
          <DeckList />
        </Route>
        <Route path='/decks/:deckId/cards'>
          <CardList />
        </Route>
        <ProtectedRoute path='/dashboard'>
          <UserClassList />
        </ProtectedRoute>
        {/* Test Components, refactor later */}
        <Route path='/' exact={true} >
          <NavBar />
          <Splashpage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
