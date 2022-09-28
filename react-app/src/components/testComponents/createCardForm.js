import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { createCardThunk, updateCardThunk } from '../../store/card'

function CardForm({ card, create }) {
    const dispatch = useDispatch()
    const { deckId } = useParams()

    const [question, setQuestion] = useState(card?.question || "")
    const [answer, setAnswer] = useState(card?.answer || "")

    const [validationErrors, setValidationErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleCreate = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const cardData = {
            question,
            answer
        }

        const payload = { deckId, cardData }

        const data = await dispatch(createCardThunk(payload))
    }

    const handleUpdate = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const cardData = {
            question,
            answer
        }

        const payload = { cardId: card.id, cardData }

        const data = await dispatch(updateCardThunk(payload))
    }

    return (
        <form onSubmit={create ? handleCreate : handleUpdate}>
            <label htmlFor='question'>Question</label>
            <input
                required
                type='text'
                name='question'
                value={question}
                onChange={e => setQuestion(e.target.value)}
            />
            <label htmlFor='answer'>Answer</label>
            <input
                required
                type='text'
                name='answer'
                value={answer}
                onChange={e => setAnswer(e.target.value)}
            />
            <button type='submit'>Save</button>
        </form>
    )
}

export default CardForm
