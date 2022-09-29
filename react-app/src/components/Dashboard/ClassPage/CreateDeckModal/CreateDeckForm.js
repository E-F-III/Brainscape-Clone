import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { createDeckThunk } from '../../../../store/deck';

const DeckForm = ({ classId, setShowModal }) => {
    const dispatch = useDispatch();

    const [validationErrors, setValidationErrors] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [title, setTitle] = useState('');


    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const deck = {
            title
        }

        const payload = { deck, classId }

        const data = await dispatch(createDeckThunk(payload));

        setShowModal(false)

    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                {validationErrors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                ))}
            </div>
            <div>
                <label htmlFor='title'>Title</label>
                <input
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <button type='submit'>Create</button>
            </div>
        </form>
    );
};

export default DeckForm;
