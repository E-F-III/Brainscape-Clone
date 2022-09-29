import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import './DeckPage.css'

function DeckPage() {
    const { deckId } = useParams()
    const { url } = useRouteMatch()

    const deck = useSelector(state => state.decks[Number(deckId)])
    console.log(deck)
    return (
        <h1>DECK PAGE</h1>
    )
}

export default DeckPage
