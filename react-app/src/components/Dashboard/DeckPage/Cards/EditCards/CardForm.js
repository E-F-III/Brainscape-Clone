import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { updateCardThunk, deleteCardThunk } from "../../../../../store/card";

import './EditCards.css'

function CardForm({ card, idx }) {
    const dispatch = useDispatch()

    const [question, setQuestion] = useState(card.question)
    const [answer, setAnswer] = useState(card.answer)

    const [validationErrors, setValidationErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSave = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const cardData = { question, answer }
        const payload = { cardId: card.id, cardData}

        const data = await dispatch(updateCardThunk(payload))
    }

    const handleDelete = async e => {
        e.preventDefault()

        const payload = { cardId: card.id}

        const data = await dispatch(deleteCardThunk(payload))
    }

    useEffect(() => {
        const newErrors = []

        // validation errors go here

        setValidationErrors(newErrors)

    }, [question, answer])

    return (
        <div className="edit-card-card">
            <div className="edit-card-card-header">
                <div className="edit-card-card-number">{idx + 1}</div>
            </div>
            <div className="edit-card-card-body">
                <div className="edit-card-card-left">
                <div className="card-card-wrapper">
                        <div className="card-card-contents-container">
                            <div className="card-card-contents">
                                <div className="card-card-content-header">
                                    <div className="card-card-indicator">Q</div>
                                    {/* Bonus feature : Advanced Cards
                                    <div></div> */}
                                </div>
                                <div className="card-card-content-main">
                                    <div className="card-card-field-container">
                                        <div className="card-card-field">
                                            <div className="card-card-input">
                                                <textarea
                                                id='card-card-textarea'
                                                className="textarea-input"
                                                type="text"
                                                name="question"
                                                value={question}
                                                onChange={e => setQuestion(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="edit-card-card-right">
                    <div className="card-card-wrapper">
                        <div className="card-card-contents-container">
                            <div className="card-card-contents">
                                <div className="card-card-content-header">
                                    <div className="card-card-indicator">A</div>
                                    {/* Bonus feature : Advanced Cards
                                    <div></div> */}
                                </div>
                                <div className="card-card-content-main">
                                    <div className="card-card-field-container">
                                        <div className="card-card-field">
                                            <div className="card-card-input">
                                                <textarea
                                                id='card-card-textarea'
                                                className="textarea-input"
                                                type="text"
                                                name="answer"
                                                value={answer}
                                                onChange={e => setAnswer(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="edit-card-card-footer">
                <div onClick={handleSave} className="general-edit-buttons">
                    <ion-icon name="save"></ion-icon>
                </div>
                <div onClick={handleDelete} className="general-edit-buttons">
                    <ion-icon name="trash"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default CardForm
