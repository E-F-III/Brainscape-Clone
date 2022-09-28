import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getDeckCardsThunk } from '../../store/card'

function CardList() {
    const dispatch = useDispatch()
    const { deckId } = useParams()

    console.log(deckId)

    const cards = useSelector(state => state.cards)
    const cardsList = Object.values(cards)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const payload = { deckId }

        dispatch(getDeckCardsThunk(payload))
            .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <>
            {cardsList.map(card => (
                <>
                    <div>{card.question}</div>
                    <div>{card.answer}</div>
                </>
                ))
            }
        </>
    )
}

export default CardList
