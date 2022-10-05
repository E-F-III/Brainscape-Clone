import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import DecksSection from "./ClassDecksSection";

import './ClassPage.css'

function ClassPage() {
    const { classId } = useParams()
    const { url } = useRouteMatch()

    const singleClass = useSelector(state => state.classes[Number(classId)])

    if (!singleClass) {
        return (
            <div style={{
                padding:"20px",
                justifyContent: "center",
                alignItems: "center",
                width:"100%",
                height: "100%",
                display: "flex",
                fontSize: "50px"
            }}>
                Class Not Found
            </div>
        )
    }

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
            <div id="class-tabs">
                {/* Feature 3 Classes */}
                {/* <div className="class-tab-container">
                    <NavLink className="class-tab" to={`${url}/about`}>About</NavLink>
                </div> */}
                <NavLink to={`${url}/decks`} className="class-tab-container" activeClassName="class-tab-active">
                    <div className="class-tab">Decks</div>
                </NavLink>
            </div>
            <Switch>
                {/* Feature 3 Classes */}
                {/* <Route path={`${url}/about`}></Route> */}
                <Route path={`${url}/decks`}>
                    <DecksSection classId={classId}/>
                </Route>
            </Switch>
        </div>
    )
}

export default ClassPage
