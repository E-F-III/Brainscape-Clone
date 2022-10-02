import React from "react";
import { useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";

import './PreviewCards.css'

function PreviewCards() {
    const { deckId } = useParams()
    const { url } = useRouteMatch()

    const deck = useSelector(state => state.decks[Number(deckId)])
    const cards = useSelector(state => state.cards)
    const cardList = Object.values(cards)

    return (
        <>
            <div id="preview-cards-container">
                <div id="preview-cards-table">
                    <div id="preview-cards-list">
                        {cardList.map((card, idx) => (
                            <div className="card-row">
                                <div className="card-header">{idx + 1}</div>
                                <div className="card">
                                    <div className="card-question-container">
                                        <div className="card-contents">
                                            <div className="card-content-header">
                                                <div className="card-content-header-main">
                                                    <div className="card-type">q</div>
                                                </div>
                                            </div>
                                            <div className="card-main-container">
                                                <div className="card-preview-text-container">
                                                    <p className="card-preview-text">{card.question}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-answer-container">
                                        <div className="card-contents">
                                            <div className="card-content-header">
                                                <div className="card-content-header-main">
                                                    <div className="card-type">a</div>
                                                </div>
                                            </div>
                                            <div className="card-main-container">
                                                <div className="card-preview-text-container">
                                                    <p className="card-preview-text">{card.answer}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>

    )
}

export default PreviewCards
