import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { logout } from '../../../store/session'

import whiteLogo from '../../../assets/white-logo.png'

import './Sidebar.css'

function Sidebar() {
    const dispatch = useDispatch()
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)

    const classes = useSelector(state => state.classes)
    const classList = Object.values(classes)

    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
    };


    return (
        <div id="sidebar">
            <header id="sidebar-header">
                <div id="sidebar-header-top">
                    <div id="splash-button" onClick={() => history.push('/')}>
                        <img id="logo" src={whiteLogo} />
                    </div>
                    <div id="sidebar-user-info">
                        <div></div>
                        <h3>{sessionUser.firstName} {sessionUser.lastName}</h3>
                        <div></div>
                    </div>
                    <div id="profile-cog-container" onClick={onLogout}>
                        {/* <ion-icon name="settings-sharp" size="large"></ion-icon> */}
                        <ion-icon name="log-out-outline" size="large"></ion-icon>
                    </div>
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
                        <div onClick={() => history.push(`/dashboard/${singleClass.id}/decks`)} key={singleClass.id} className="class-container">
                            <div className="class-icon-container">
                                <img className="class-icon" src="https://www.brainscape.com/assets/app_icons/ugs.png" />
                            </div>
                            <div className="class-data">
                                <div className="class-title">{singleClass.title}</div>
                                {/* bonus feature : mastery + progress ?  */}
                                {/* <div className="class-progress"></div> */}
                            </div>
                            {/* feature 3: classes */}
                            {/* <div className="class-remove-button"></div> */}
                        </div>
                    ))
                }
            </div>
            <footer id="sidebar-footer"></footer>
        </div>
    )
}

export default Sidebar
