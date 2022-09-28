import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteDeckThunk } from '../../store/deck'

function DeleteDeckButton({ deck }) {
    const dispatch = useDispatch()

    const handleDelete = async e => {
        e.preventDefault()

        const payload = { deckId: deck.id}

        await dispatch(deleteDeckThunk(payload))
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteDeckButton
