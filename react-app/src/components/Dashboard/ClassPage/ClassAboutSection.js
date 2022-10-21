import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextareaAutosize from 'react-textarea-autosize'

import { updateClassThunk } from "../../../store/class";

import './ClassPage.css'

function AboutSection() {
    const { classId } = useParams();
    const dispatch = useDispatch()

    const singleClass = useSelector(state => state.classes[Number(classId)])

    // for conditional rendering
    const [showHeadlineEditor, setShowHeadlineEditor] = useState(false)
    const [showDescriptionEditor, setShowDescriptionEditor] = useState(false)

    // for handling the updates
    const [headline, setHeadline] = useState(singleClass?.headline || '')
    const [description, setDescription] = useState(singleClass?.description || '')

    const [validationErrors, setValidationErrors] = useState({})

    // useEffects

    useEffect(() => {
        const errors = {}
        if (headline.length > 280) errors['headline'] = 'Headline must be atmost 280 characters'
        if (description.length > 5000) errors['description'] = 'Description must be atmost 5000 characters'

        setValidationErrors(errors)

    }, [headline, description])

    // conditional rendering
    let headlineContent;
    let descriptionContent;

    if (!showHeadlineEditor) {
        headlineContent =
            <div className={singleClass.headline ? "class-about-header-text" : "class-about-header-text-empty"}>
                {singleClass.headline ? singleClass.headline : 'No headline. Click the Edit button to add a headline.'}
            </div>
    } else {
        headlineContent =
            <TextareaAutosize
                id='headlineEditor'
                className='textarea-input'
                type='text'
                name='headline'
                value={headline}
                onChange={e => setHeadline(e.target.value)}
            />
    }

    if (!showDescriptionEditor) {
        descriptionContent =
            <div className={singleClass.description ? "class-about-header-text" : "class-about-header-text-empty"}>
                {singleClass.description ? singleClass.description : 'No description. Click the Edit button to add a description.'}
            </div>
    } else {
        descriptionContent =
            <TextareaAutosize
                id='descriptionEditor'
                className='textarea-input'
                type='text'
                name='description'
                value={description}
                onChange={e => setDescription(e.target.value)}
            />
    }

    const handleCancelHeadline = async e => {
        e.preventDefault()

        setShowHeadlineEditor(false)
        setHeadline(singleClass?.headline || '')
    }

    const handleCancelDescription = async e => {
        e.preventDefault()

        setShowDescriptionEditor(false)
        setDescription(singleClass?.description || '')
    }

    const handleUpdateHeadline = async e => {
        e.preventDefault()

        const classData = {
            ...singleClass,
            headline
        }

        const payload = {
            classId,
            classData
        }

        await dispatch(updateClassThunk(payload))

        setShowHeadlineEditor(false)
    }

    const handleUpdateDescription = async e => {
        e.preventDefault()

        const classData = {
            ...singleClass,
            description
        }

        const payload = {
            classId,
            classData
        }

        await dispatch(updateClassThunk(payload))

        setShowDescriptionEditor(false)

    }

    return (
        <div id='class-about-page'>
            <div className="class-segment">
                <div className="class-segment-header">
                    <div className="class-header-container-left">
                        <div className="class-segment-heading">Headline</div>
                        <div className='class-edit-buttons' style={{visibility: showHeadlineEditor ? 'hidden' : 'visible' }}>
                            <ion-icon onClick={() => setShowHeadlineEditor(true)} name="pencil-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="class-header-container-right" style={{visibility: !showHeadlineEditor ? 'hidden' : 'visible' }}>
                        <div onClick={handleCancelHeadline} className="class-simple-text-button">Cancel</div>
                        <div onClick={handleUpdateHeadline} className="class-pill-button">Save Changes</div>
                    </div>
                </div>
                {headlineContent}
            </div>
            <div className="class-segment">
                <div className="class-segment-header">
                    <div className="class-header-container-left">
                        <div className="class-segment-heading">Description</div>
                        <div className='class-edit-buttons' style={{visibility: showDescriptionEditor ? 'hidden' : 'visible' }}>
                            <ion-icon onClick={() => setShowDescriptionEditor(true)} name="pencil-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="class-header-container-right" style={{visibility: !showDescriptionEditor ? 'hidden' : 'visible' }}>
                        <div onClick={handleCancelDescription} className="class-simple-text-button">Cancel</div>
                        <div onClick={handleUpdateDescription} className="class-pill-button">Save Changes</div>
                    </div>
                </div>
                {descriptionContent}
            </div>
        </div>
    )
}

export default AboutSection
