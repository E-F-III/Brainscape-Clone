import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import './ClassPage.css'

function ClassPage() {
    const { classId } = useParams()
    const { url } = useRouteMatch()

    const singleClass = useSelector(state => state.classes[Number(classId)])

    return (
        <div>
            <div id="class-header">
                <div id="class-header-img-container">
                    <img id="class-header-img" src="https://www.brainscape.com/assets/app_icons/ugs.png" />
                </div>
                <div id="class-header-main">
                    <div id="class-title-and-edit">
                        <h1 id="class-title">{singleClass.title}</h1>
                        {/* Feature 3: Class (edit)
                        <div></div> */}
                    </div>
                    {/* bonus feature : read other users classes
                    <div></div> */}
                    {/* feature 4: mastery
                    <div></div> */}
                </div>
                <div></div>
            </div>
            <div>
                <NavLink to={`${url}/about`}>About</NavLink>
                <NavLink to={`${url}/decks`}>Decks</NavLink>
            </div>
            <Switch>
                <Route to={`${url}/about`}></Route>
                <Route to={`${url}/decks`}></Route>
            </Switch>
        </div>
    )
}

export default ClassPage
