import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";

import { logout } from '../../../store/session'

import ClassFormModal from "./CreateClassModal";

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
                        <img id="logo" alt="logo" src={whiteLogo} />
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

            </header>
            <div id="sidebar-header-bottom">
                <h4 id="classes-heading">My classes ({classList.length})</h4>
                {/* feature 3: classes and feature 4: search classes */}
                <div id="classes-buttons">
                        {/* <div id="create-class"></div> */}
                        <ClassFormModal />
                        <div id="search-classes"></div>
                    </div>
            </div>
            <div id="sidebar-body">
                {
                    classList.map(singleClass => (
                        <NavLink to={`/dashboard/${singleClass.id}/decks`} key={singleClass.id} className="class-container" activeClassName="class-container-active">
                            <div className="class-icon-container">
                                <img className="class-icon" alt="class-icon" src="https://www.brainscape.com/assets/app_icons/ugs.png" />
                            </div>
                            <div className="class-data">
                                <div className="class-title">{singleClass.title}</div>
                                {/* bonus feature : mastery + progress ?  */}
                                {/* <div className="class-progress"></div> */}
                            </div>
                            {/* feature 3: classes */}
                            {/* <div className="class-remove-button"></div> */}
                        </NavLink>
                    ))
                }
            </div>
            <footer id="sidebar-footer">
                <div id="sidebar-footer-header">DEV LINKS</div>
                <div id="dev-about-links">

                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/efiii/">
                        <ion-icon size="large" name="logo-linkedin"></ion-icon>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/E-F-III/Brainscape-Clone">
                        <ion-icon size="large" name="logo-github"></ion-icon>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/edwardfelipeiii/">
                        <ion-icon size="large" name="logo-instagram"></ion-icon>
                    </a>

                </div>
            </footer>
        </div>
    )
}

export default Sidebar
