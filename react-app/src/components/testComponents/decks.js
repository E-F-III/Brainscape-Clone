import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import DeckForm from './createDeckForm'
import UpdateDeckForm from './UpdateDeckForm'
import DeleteDeckButton from './DeleteDeckButton'

import { getClassDecksThunk } from '../../store/deck'

function DeckList() {
    const dispatch = useDispatch()
    const { classId } = useParams()

    const decks = useSelector(state => state.decks)
    const classList = Object.values(decks)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const payload = { classId }

        dispatch(getClassDecksThunk(payload))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <>
            <DeckForm />
            <div>
                {
                    classList.map(deck => (
                        <>
                            <div>{deck.title}</div>
                            <div>{deck.description}</div>
                            <UpdateDeckForm deck={deck} />
                            <DeleteDeckButton deck={deck} />
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default DeckList