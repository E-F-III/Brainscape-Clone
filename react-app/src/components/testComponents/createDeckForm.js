import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'

import { createDeckThunk } from '../../store/deck'

function DeckForm() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { classId } = useParams()

    const [title, setTitle] = useState('')

    const [validationErrors, setValidationErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const deck = {
            title,
            description: null
        }

        console.log(deck)

        const payload = { classId, deck }

        const data = await dispatch(createDeckThunk(payload))

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

            <button type='submit'>Create</button>
        </form>
    )
}

export default DeckForm
