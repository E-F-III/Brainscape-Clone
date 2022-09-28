import React from "react";
import { useSelector } from "react-redux";
import { getUserClassesThunk } from "../../../store/class";

import './Sidebar.css'

function Sidebar() {
    const sessionUser = useSelector(state => state.session.user)

    const classes = useSelector(state => state.classes)
    const classList = Object.values(classes)

    return (
        <div id="sidebar">
            <header id="sidebar-header">
                <div id="sidebar-header-top">
                    <div id="splash-button"></div>
                    <div id="sidebar-user-info">
                        <div></div>
                        <h3>{sessionUser.username}</h3>
                        <div></div>
                    </div>
                    <div id="profile-cog-container"></div>
                </div>
                <div id="sidebar-header-bottom">
                    <h4 id="classes-heading">My classes ({classList.length})</h4>
                    {/* feature 3: classes and feature 4: search classes */}
                    {/* <div id="classes-buttons">
                        <div id="create-class"></div>
                        <div id="search-classes"></div>
                    </div> */}
                </div>
            </header>
            <div id="sidebar-body">
                {
                    classList.map(singleClass => (
                        <>
                            <div key={singleClass.id} className="class-container">
                                <div className="class-icon-container">
                                    <img className="class-icon" src="https://www.brainscape.com/assets/app_icons/ugs.png" />
                                </div>
                                <div className="class-data">
                                    <div className="class-title">{singleClass.title}</div>
                                    {/* bonus feature : progress ?  */}
                                    {/* <div className="class-progress"></div> */}
                                </div>
                                {/* feature 3: classes */}
                                {/* <div className="class-remove-button"></div> */}
                            </div>
                        </>

                    ))
                }
            </div>
            <footer id="sidebar-footer"></footer>
        </div>
    )
}

export default Sidebar
