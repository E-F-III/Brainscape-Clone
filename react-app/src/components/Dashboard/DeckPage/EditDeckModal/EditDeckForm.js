import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateDeckThunk } from '../../../../store/deck';

import './EditDeckModal.css'

const EditDeckForm = ({ deckId, setShowModal }) => {
    const dispatch = useDispatch()

    const deck = useSelector(state => state.decks[Number(deckId)])

    const [title, setTitle] = useState(deck.title)
    const [description, setDescription] = useState(deck.description || '')

    const [validationErrors, setValidationErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const newValidationErrors = []

        if (title.length === 0) newValidationErrors.push('Please provide a title')
        if (title.length > 50) newValidationErrors.push('Title must not exceed 50 characters')

        if (description.length > 5000) newValidationErrors.push('Description must not exceed 5000 characters')

        setValidationErrors(newValidationErrors)
    }, [title, description])

    const handleSubmit = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const deckData = {
            title,
            description
        }

        const payload = { deckId: deck.id, deckData }

        // const data = await dispatch(updateDeckThunk(payload))
        await dispatch(updateDeckThunk(payload))

        setIsSubmitted(false)
        setShowModal(false)
    }

    return (
        <div>
            <div id='edit-deck-header'>
                Edit Deck
            </div>
            {isSubmitted && validationErrors.length > 0 && (
                <div>
                    {validationErrors.map((error, ind) => <div key={ind} className='errors'>{error}</div>)}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <div className='text-field'>
                    <div className='field-label'>Title</div>
                    <input
                        className='form-input'
                        required
                        type='text'
                        name='title'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className='text-field'>
                    <div className='field-label'>Descrtiption</div>
                    <textarea
                        className='textarea-input'
                        type='text'
                        name='description'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className='modal-buttons'>
                    <div onClick={() => setShowModal(false)} className="pill-button ">Cancel</div>
                    <div onClick={handleSubmit} className="pill-button modal-button">Save</div>
                </div>
            </form>
        </div>

    )
}

export default EditDeckForm
