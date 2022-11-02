import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateClassThunk } from '../../../../store/class';

import './EditClassModal.css';

const EditClassForm = ({ classId, setShowModal }) => {
    const dispatch = useDispatch()

    const singleClass = useSelector(state => state.classes[Number(classId)])

    const [title, setTitle] = useState(singleClass.title)

    const [validationErrors, setValidationErrors] = useState([])
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        const newValidationErrors = []

        if (title.length === 0) newValidationErrors.push('Please provide a title')
        if (title.length > 50) newValidationErrors.push('Title must not exceed 50 characters')

        setValidationErrors(newValidationErrors)
    }, [title])

    const handleSubmit = async e => {
        e.preventDefault()

        setIsSubmitted(true)

        if (validationErrors.length > 0) return

        const classData = {
            ...singleClass,
            title
        }

        const payload = { classId, classData }

        await dispatch(updateClassThunk(payload))

        setShowModal(false)
    }

    return (
        <div>
            <div id='edit-class-header'>
                Edit Class Title
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
                <div className='modal-buttons'>
                    <div onClick={() => setShowModal(false)} className="pill-button ">Cancel</div>
                    <div onClick={handleSubmit} className="pill-button modal-button">Save</div>
                </div>
            </form>
        </div>
    )
}

export default EditClassForm;
