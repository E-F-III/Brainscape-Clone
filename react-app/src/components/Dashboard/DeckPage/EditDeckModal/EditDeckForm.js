import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateDeckThunk } from '../../../../store/deck';

import './EditDeckModal.css'

const EditDeckForm = ({ deckId, setShowModal }) => {
    const dispatch = useDispatch()

    const deck = useSelector(state => state.decks[Number(deckId)])

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

        setShowModal(false)
    }

    return (
        <div>
            <div id='edit-deck-header'>
                Edit Deck
            </div>
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
