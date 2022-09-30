import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route, Switch, useHistory, useParams, useRouteMatch } from "react-router-dom";

import { getClassDecksThunk } from "../../../store/deck";

import EditDeckModal from "./EditDeckModal";

import './DeckPage.css'

function DeckPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { classId, deckId } = useParams()
    const { url } = useRouteMatch()

    const singleClass = useSelector(state => state.classes[Number(classId)])
    const deck = useSelector(state => state.decks[Number(deckId)])

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getClassDecksThunk({ classId }))
            setIsLoaded(true)
        })()
    }, [dispatch])

    return isLoaded && (
        <div>
            <div id="deck-header">
                <div id="deck-header-top-row">
                    <div id="class-header-top-content">
                        <div onClick={() => history.push(`/dashboard/${classId}`)} id="class-button">
                            <div>
                                <ion-icon name="chevron-back-outline" />
                            </div>
                            <div>
                                <img id="class-icon-button" src="https://www.brainscape.com/assets/app_icons/ugs.png" />

                            </div>
                            <div id="class-name">{singleClass.title}</div>
                        </div>
                        <div id="deck-header-info">
                            <div id="deck-title">{deck.title}</div>
                            <div>
                                {/* <ion-icon name="ellipsis-horizontal-outline" /> */}
                                <EditDeckModal deckId={deckId} />
                            </div>
                        </div>
                    </div>
                    {/* Feature 2: Cards (study)
                    <div></div> */}
                </div>
                <div id="deck-tabs">
                    <div className="deck-tab-container">
                        <NavLink className="deck-tab" to={`${url}/cards/preview`}>Preview Cards</NavLink>
                    </div>
                    <div className="deck-tab-container">
                        <NavLink className="deck-tab" to={`${url}/cards/edit`}>Edit Cards</NavLink>
                    </div>
                    <div className="deck-tab-container">
                        <NavLink className="deck-tab" to={`${url}/cards/browse`}>Browse Deck</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeckPage
