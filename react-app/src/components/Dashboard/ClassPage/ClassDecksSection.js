import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory, useParams, useRouteMatch } from "react-router-dom";

import DeckFormModal from "./CreateDeckModal";

import './ClassPage.css'

function DecksSection() {
    const history = useHistory()
    const { classId } = useParams()
    const { url } = useRouteMatch()
    console.log(classId)

    const decks = useSelector(state => state.decks)
    const deckList = Object.values(decks)

    return (
        <div id="deck-list">
            {
                deckList.map(deck => (
                    <NavLink key={deck.id} to={`${url}/${deck.id}/cards/preview`} className="deck-container">
                        {/* Feature 4: Mastery
                        <div></div> */}
                        <div className="deck-info">
                            <div className="deck-info-top">
                                <h4>{deck.title}</h4>
                            </div>
                            {/* Feature ? : Progress
                            <div></div> */}
                        </div>
                        <div className="deck-container-buttons">
                            {/* Feature 2 Cards (study)
                            <div></div> */}
                            <div onClick={() => history.push(`${url}/${deck.id}/cards/preview`)} className="deck-view-button-container">
                                <ion-icon size="large" name="chevron-forward-outline" />
                            </div>
                        </div>
                    </NavLink>
                ))
            }
            <DeckFormModal classId={classId}/>
        </div>
    )
}

export default DecksSection
