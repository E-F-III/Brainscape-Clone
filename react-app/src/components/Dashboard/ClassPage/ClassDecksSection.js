import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getClassDecksThunk } from "../../../store/deck";

import DeckFormModal from "./CreateDeckModal";

import './ClassPage.css'

function DecksSection({ classId }) {
    const dispatch = useDispatch()

    const decks = useSelector(state => state.decks)
    const deckList = Object.values(decks)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
            await dispatch(getClassDecksThunk({ classId }));
            setIsLoaded(true);
        })();
    }, [dispatch])

    return isLoaded && (
        <div id="deck-list">
            {
                deckList.map(deck => (
                    <div className="deck-container">
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
                            <div className="deck-view-button-container">
                                <ion-icon name="chevron-forward-outline" />
                            </div>
                        </div>
                    </div>
                ))
            }
            <DeckFormModal classId={classId}/>
        </div>
    )
}

export default DecksSection
