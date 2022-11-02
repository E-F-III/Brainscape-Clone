import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createClassThunk } from '../../../../store/class';

import './ClassFormModal.css'

const ClassForm = ({ setShowModal }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const newValidationErrors = []
        console.log(title)
        if (title.length === 0) newValidationErrors.push('Please provide a title')
        if (title.length > 50) newValidationErrors.push('Title must not exceed 50 characters')

        setValidationErrors(newValidationErrors)
    }, [title])

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const newClass = {
            title,
            description: ""
        }

        const payload = { newClass }

        const data = await dispatch(createClassThunk(payload))

        setIsSubmitted(false)
        setShowModal(false)

        history.push(`/dashboard/${data.id}/about`)
    }

    return (
        <>
            <div id='create-class-header'>Create New Class</div>
            <div id='create-class-subheader'>A Class is a set of Flashcards, grouped into Decks</div>
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
                        Enter the title of your new class above
                    </div>
                </div>
                <div className='modal-buttons'>
                    <div onClick={onSubmit} className="pill-button modal-button">Create</div>
                </div>
            </form>
        </>
    )
}

export default ClassForm
