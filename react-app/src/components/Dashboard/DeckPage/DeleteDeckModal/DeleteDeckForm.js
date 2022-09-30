import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { deleteDeckThunk } from "../../../../store/deck";

const DeleteDeckForm = ({ deckId, setIsLoaded }) => {
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
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteDeckForm
