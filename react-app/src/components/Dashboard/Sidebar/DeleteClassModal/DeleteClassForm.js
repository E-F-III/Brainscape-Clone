import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteClassThunk } from "../../../../store/class";

const DeleteDeckForm = ({ setShowModal, classId }) => {
    const dispatch = useDispatch()
    const history = useHistory()

    const singleClass = useSelector(state => state.classes[Number(classId)])

    const handleDelete = async e => {
        e.preventDefault()

        const payload = { classId }

        await dispatch(deleteClassThunk(payload))

        history.push(`/dashboard`)
    }

    return (
        <div id="delete-deck-modal-content">
            <div id="delete-deck-header">Caution</div>
            <div id="delete-deck-message">You are about to remove the {singleClass.title} class from your library. Are you sure that you wish to proceed?</div>
            <div className="modal-buttons">
                <div onClick={() => setShowModal(false)} className="pill-button ">Cancel</div>
                <div onClick={handleDelete} className="pill-button modal-button">Delete</div>
            </div>
        </div>
    )
}

export default DeleteDeckForm
