import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import CardForm from './createCardForm'
import DeleteCardButton from './DeleteCardButton'

import { getDeckCardsThunk } from '../../store/card'

function CardList() {
    const dispatch = useDispatch()
    const { deckId } = useParams()

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
            <CardForm create={true}/>
            {cardsList.map(card => (
                <>
                    <div>{card.question}</div>
                    <div>{card.answer}</div>
                    <CardForm card={card} create={false} />
                    <DeleteCardButton card={card} />
                </>
            ))
            }
        </>
    )
}

export default CardList
