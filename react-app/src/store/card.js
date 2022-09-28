// Action Types

const GET_CARDS = "cards/get-cards-by-deck"

const CREATE_CARD = "cards/create-card"
const UPDATE_CARD = "cards/update-card"
const DELETE_CARD = "cards/delete-card"

// Action Creators

const getDeckCardsAction = payload => {
    return {
        type: GET_CARDS,
        payload
    }
}

const createCardAction = payload => {
    return {
        type: CREATE_CARD,
        payload
    }
}

const updateCardAction = payload => {
    return {
        type: UPDATE_CARD,
        payload
    }
}

const deleteCardAction = payload => {
    return {
        type: DELETE_CARD,
        payload
    }
}

// Thunk Action Creators

export const getDeckCardsThunk = payload => async dispatch => {
    const response = await fetch(`/api/decks/${payload.deckId}/cards`)
    const data = await response.json()

    if (response.ok) {
        await dispatch(getDeckCardsAction(data))
    }

    return data
}

export const createCardThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/decks/${payload.deckId}/cards`,
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload.card)
        })
    const data = await response.json()

    if (response.ok) {
        await dispatch(createCardAction(data))
    }

    return data
}

export const updateCardThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/cards/${payload.cardId}`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload.cardData)
        })
    const data = await response.json()

    if (response.ok) {
        await dispatch(updateCardAction(data))
    }

    return data
}

export const deleteCardThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/decks/${payload.cardId}`,
        {
            method: "DELETE",
        })
    const data = await response.json()

    if (response.ok) {
        await dispatch(deleteCardAction(payload.cardId))
    }

    return data
}


// Reducer

const initialState = {}

const cardReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_CARDS: {
            newState = {}
            action.payload.cards.forEach(card => {
                newState[card.id] = { ...newState[card.id], ...card }
            })
            return newState
        }
        case CREATE_CARD: {
            newState[action.payload.id] = action.payload
            return newState
        }
        case UPDATE_CARD: {
            newState[action.payload.id] = {...newState[action.payload.id], ...action.payload}
            return newState
        }
        case DELETE_CARD: {
            newState = { ...state };
            delete newState[action.payload]
            return newState
        }
        default: {
            return state
        }
    }
}

export default cardReducer
