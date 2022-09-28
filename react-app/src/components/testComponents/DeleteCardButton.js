import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteCardThunk } from '../../store/card'

function DeleteCardButton({ card }) {
    const dispatch = useDispatch()

    const handleDelete = async e => {
        e.preventDefault()

        const payload = { cardId: card.id}

        await dispatch(deleteCardThunk(payload))
    }

    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteCardButton
