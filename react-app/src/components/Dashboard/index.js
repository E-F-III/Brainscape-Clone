import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, Route, useRouteMatch, useHistory, Redirect, useLocation } from "react-router-dom";

import { getUserClassesThunk } from "../../store/class";

import ClassPage from "./ClassPage";
import DeckPage from "./DeckPage";
import Sidebar from "./Sidebar";

import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch()
  const { url } = useRouteMatch()
  const { pathname } = useLocation()

  const [isLoaded, setIsLoaded] = useState(false)
  const classes = useSelector(state => state.classes)
  const classList = Object.values(classes)

  useEffect(() => {
    (async () => {
      await dispatch(getUserClassesThunk());
      setIsLoaded(true);
    })();
  }, [dispatch])

  if (classList.length && pathname === '/dashboard' ){ // redirect to the users FIRST class
    return <Redirect to={`${url}/${classList[0].id}/decks`} />
  }

  return isLoaded && (
    <div id="dashboard-container">
      <Sidebar />
      <div id="dashboard-main">
        <Switch>
          <Route path={`${url}/:classId/decks/:deckId`}>
            <DeckPage />
          </Route>
          <Route path={`${url}/:classId`}>
            <ClassPage />
          </Route>
          {/* <Route path={`${url}/`}>
            <h1>Select a class to view</h1>
          </Route> */}
        </Switch>
      </div>

    </div>
  )
}

export default Dashboard
