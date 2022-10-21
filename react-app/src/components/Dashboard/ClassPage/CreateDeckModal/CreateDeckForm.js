import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { createDeckThunk } from '../../../../store/deck';

import './DeckFormModal.css'

const DeckForm = ({ classId, setShowModal }) => {
    const dispatch = useDispatch();

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [title, setTitle] = useState('');

    useEffect(() => {
        const newValidationErrors = []

        if (title.length === 0) newValidationErrors.push('Please provide a title')
        if (title.length > 50) newValidationErrors.push('Title must not exceed 50 characters')

        setValidationErrors(newValidationErrors)
    }, [title])

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const deck = {
            title,
            description: ""
        }

        const payload = { deck, classId }

        // const data = await dispatch(createDeckThunk(payload));
        await dispatch(createDeckThunk(payload));

        setIsSubmitted(false)
        setShowModal(false)
    };

    return (
        <>
            <div id='create-deck-header'>Create New Deck</div>
            <div id='create-deck-subheader'>A Deck is a subset of Flashcards in a Class, similar to chapters in a book</div>
            {isSubmitted && validationErrors.length > 0 && (
                <div>
                    {validationErrors.map((error, ind) => <div key={ind} className='errors'>{error}</div>)}
                </div>
            )}
            <form onSubmit={onSubmit}>
                <div>
                    <input className='form-input'
                        name='title'
                        placeholder='e.g Biology, Javascript'
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <div className='field-caption'>
                        Enter the title of your new deck above
                    </div>
                </div>
                <div className='modal-buttons'>
                    <div onClick={onSubmit} className="pill-button modal-button">Create</div>
                </div>
            </form>
        </>

    );
};

export default DeckForm;
