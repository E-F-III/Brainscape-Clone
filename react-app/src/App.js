import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginFormModal/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
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
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
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
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
