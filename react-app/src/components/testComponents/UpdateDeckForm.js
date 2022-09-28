import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { updateDeckThunk } from '../../store/deck'

function UpdateDeckForm({ deck }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [title, setTitle] = useState(deck.title)
    const [description, setDescription] = useState(deck.description)

    const [validationErrors, setValidationErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const deckData = {
            title,
            description
        }

        const payload = { deckId: deck.id, deckData }

        const data = await dispatch(updateDeckThunk(payload))

        // history.push(`/dashboard/classes/${classId}/decks`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='title'>Title</label>
            <input
                required
                type='text'
                name='title'
                value={title}
                onChange={e => setTitle(e.target.value)}
            />

            <label htmlFor='description'>Descrtiption</label>
            <input
                type='text'
                name='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />

            <button type='submit'>Save</button>
        </form>
    )
}

export default UpdateDeckForm
