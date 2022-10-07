import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TextareaAutosize from 'react-textarea-autosize'

import { createCardThunk, updateCardThunk, deleteCardThunk } from "../../../../../store/card";

import './EditCards.css'

function CardForm({ deckId, card, idx, edit, setShowCreateCard }) {
    const dispatch = useDispatch()

    const [question, setQuestion] = useState(edit ? card.question : '')
    const [answer, setAnswer] = useState(edit ? card.answer : '')

    const [validationErrors, setValidationErrors] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [unsavedErrors, setUnsavedErrors] = useState({})

    const [activeCard, setActiveCard] = useState(false)

    useEffect(() => {
        const newValidationErrors = {}

        if (question.length === 0) newValidationErrors.question = "Please provide a question"
        if (question.length > 500) newValidationErrors.question = "Question must not exceed 500 characters"

        if (answer.length === 0) newValidationErrors.answer = "Please provide a answer"
        if (answer.length > 500) newValidationErrors.answer = "Answer must not exceed 500 characters"

        setValidationErrors(newValidationErrors)
    }, [question, answer])

    useEffect(() => {
        const notSaved = {}
        if (!activeCard && question != (edit ? card.question : '')) notSaved.unsavedQuestion = "You have unsaved changes."
        if (!activeCard && answer != (edit ? card.answer : '')) notSaved.unsavedAnswer = "You have unsaved changes."

        setUnsavedErrors(notSaved)
    }, [activeCard])

    const handleCreate = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (Object.values(validationErrors).length > 0) return
        // if (validationErrors.length > 0) return

        const cardData = { question, answer }
        const payload = { deckId, cardData }

        const data = await dispatch(createCardThunk(payload))

        setShowCreateCard(false)
    }

    const handleCancel = async e => {
        e.preventDefault()

        setQuestion('')
        setAnswer('')
        setShowCreateCard(false)
    }

    const handleSave = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (Object.values(validationErrors).length > 0) return
        // if (validationErrors.length > 0) return

        const cardData = { question, answer }
        const payload = { cardId: card.id, cardData }

        const data = await dispatch(updateCardThunk(payload))
        setActiveCard(false)
    }

    const handleDelete = async e => {
        e.preventDefault()

        const payload = { cardId: card.id }

        const data = await dispatch(deleteCardThunk(payload))
    }

    return (
        <div className={"edit-card-card"}>
            <div className="edit-card-card-header">
                <div className="edit-card-card-number">{edit ? idx + 1 : "New Card"}</div>
            </div>
            <div className={activeCard ? "edit-card-card-active" : "edit-card-card-body"}>
                <div className="edit-card-card-left">
                    <div className="card-card-wrapper">
                        <div className="card-card-contents-container">
                            <div className="card-card-contents">
                                <div className="card-card-content-header">
                                    <div className="card-card-indicator">Q</div>
                                    {/* <div className="errors">{isSubmitted ? validationErrors.question : !activeCard ? unsavedErrors.unsavedQuestion : ''}</div> */}
                                    {/* Bonus feature : Advanced Cards
                                    <div></div> */}
                                </div>
                                <div className="card-card-content-main">
                                    <div className="errors">{isSubmitted ? validationErrors.question : !activeCard ? unsavedErrors.unsavedQuestion : ''}</div>
                                    {/* Bonus feature : Advanced Cards
                                             <div></div> */}
                                    <div className="card-card-field-container">
                                        <div className="card-card-field">
                                            <div className="card-card-input">
                                                <TextareaAutosize
                                                    id={activeCard ? 'card-card-textarea-active' : 'card-card-textarea'}
                                                    className="textarea-input"
                                                    type="text"
                                                    name="question"
                                                    value={question}
                                                    onChange={e => setQuestion(e.target.value)}
                                                    onFocus={() => setActiveCard(true)}
                                                    onBlur={() => setActiveCard(false)}
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
                                    {/* <div className="errors">{isSubmitted ? validationErrors.answer : !activeCard ? unsavedErrors.unsavedAnswer : ''}</div> */}
                                    {/* Bonus feature : Advanced Cards
                                    <div></div> */}
                                </div>
                                <div className="card-card-content-main">
                                    <div className="errors">{isSubmitted ? validationErrors.answer : !activeCard ? unsavedErrors.unsavedQuestion : ''}</div>
                                    {/* Bonus feature : Advanced Cards
                                        <div></div> */}
                                    <div className="card-card-field-container">

                                        <div className="card-card-field">
                                            <div className="card-card-input">
                                                <TextareaAutosize
                                                    id={activeCard ? 'card-card-textarea-active' : 'card-card-textarea'}
                                                    className="textarea-input"
                                                    type="text"
                                                    name="answer"
                                                    value={answer}
                                                    onChange={e => setAnswer(e.target.value)}
                                                    onFocus={() => setActiveCard(true)}
                                                    onBlur={() => setActiveCard(false)}
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
            {/* <div className="edit-card-card-footer" style={{visibility: activeCard ? "visible" : !activeCard && (unsavedErrors.unsavedAnswer || validationErrors.unsavedQuestion) ? "visible" : "hidden"}}> */}
            <div className="edit-card-card-footer">
                <div onClick={edit ? handleSave : handleCreate} className="general-edit-buttons">
                    <ion-icon name="save"></ion-icon>
                </div>
                <div onClick={edit ? handleDelete : handleCancel} className="general-edit-buttons">
                    <ion-icon name="trash"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default CardForm
