import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import { getUserClassesThunk } from "../../store/class";

import ClassPage from "./ClassPage";
import Sidebar from "./Sidebar";

import './Dashboard.css'

function Dashboard() {
  const dispatch = useDispatch()
  const { url } = useRouteMatch()

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    (async () => {
      await dispatch(getUserClassesThunk());
      setIsLoaded(true);
    })();
  }, [dispatch]);

  return isLoaded && (
    <div id="dashboard-container">
      <Sidebar />
      <div id="dashboard-main">
        <Switch>
          <Route path={`${url}/:classId/decks/:deckId`}></Route>
          <Route path={`${url}/:classId`}>
            <ClassPage />
          </Route>
        </Switch>
      </div>

    </div>
  )
}

export default Dashboard
