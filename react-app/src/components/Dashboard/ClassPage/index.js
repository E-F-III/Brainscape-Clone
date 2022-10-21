import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Route, Switch, useLocation, useParams } from "react-router-dom";

import { getClassDecksThunk } from "../../../store/deck";

import DecksSection from "./ClassDecksSection";

import './ClassPage.css'

// function ClassPage({ isLoaded }) {
function ClassPage() {
    const dispatch = useDispatch()
    const { classId } = useParams()
    const { pathname } = useLocation()

    const singleClass = useSelector(state => state.classes[Number(classId)])

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getClassDecksThunk({ classId }));
            setIsLoaded(true);
        })();
    }, [dispatch, classId])

    if (pathname === `/dashboard/${classId}`) {
        return <Redirect to={`/dashboard/${classId}/about`}/>
    }

    if (isLoaded && !singleClass) {
        return (
            <div style={{
                padding: "20px",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                display: "flex",
                fontSize: "50px"
            }}>
                Class Not Found
            </div>
        )
    }

    return isLoaded && (
    // return (
        <div>
            <div id="class-header">
                <div id="class-header-img-container">
                    <img id="class-header-img" alt="class-header-img" src="https://www.brainscape.com/assets/app_icons/ugs.png" />
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
                <NavLink to={`/dashboard/${classId}/about`} className="class-tab-container" activeClassName="class-tab-active">
                    <div className="class-tab" >About</div>
                </NavLink>
                {/* <NavLink to={`${url}/decks`} className="class-tab-container" activeClassName="class-tab-active"> */}
                <NavLink to={`/dashboard/${classId}/decks`} className="class-tab-container" activeClassName="class-tab-active">
                    <div className="class-tab">Decks</div>
                </NavLink>
            </div>
            <Switch>
                {/* Feature 3 Classes */}
                <Route path={`/dashboard/:classId/about`}></Route>
                <Route path={`/dashboard/:classId/decks`}>
                    <DecksSection classId={classId} />
                </Route>
            </Switch>
        </div>
    )
}

export default ClassPage
