import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteDeckThunk } from "../../../../store/deck";

const DeleteDeckForm = ({ deckId, setIsLoaded, setShowModal }) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { classId } = useParams()

    const handleDelete = async e => {
        e.preventDefault()
        setIsLoaded(false)

        const payload = { deckId }

        await dispatch(deleteDeckThunk(payload))

        history.push(`/dashboard/${classId}/decks`)
    }

    return (
        <div id="delete-deck-modal-content">
            <div id="delete-deck-header">Caution</div>
            <div id="delete-deck-message">You are about to Remove this Deck. Are you sure that you wish to proceed?</div>
            <div className="modal-buttons">
                <div onClick={() => setShowModal(false)} className="pill-button ">Cancel</div>
                <div onClick={handleDelete} className="pill-button modal-button">Delete</div>
            </div>
        </div>
    )
}

export default DeleteDeckForm
