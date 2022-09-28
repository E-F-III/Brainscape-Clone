// Action Types

const GET_DECKS = "decks/get-decks-by-class"

const CREATE_DECK = "decks/create-deck"
const UPDATE_DECK = "decks/update-deck"
const DELETE_DECK = "decks/delete-deck"

// Action Creators

const getClassDecksAction = payload => {
    return {
        type: GET_DECKS,
        payload
    }
}

const createDeckAction = payload => {
    return {
        type: CREATE_DECK,
        payload
    }
}

const updateDeckAction = payload => {
    return {
        type: UPDATE_DECK,
        payload
    }
}

const deleteDeckAction = payload => {
    return {
        type: DELETE_DECK,
        payload
    }
}

// Thunk Action Creators

export const getClassDecksThunk = payload => async dispatch => {
    const response = await fetch(`/api/classes/${payload.classId}/decks`)
    const data = await response.json()

    if (response.ok) {
        await dispatch(getClassDecksAction(data))
    }

    return data
}

export const createDeckThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/classes/${payload.classId}/decks`,
        {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload.deck)
        })
    const data = await response.json()

    if (response.ok) {
        await dispatch(createDeckAction(data))
    }

    return data
}

export const updateDeckThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/decks/${payload.deckId}`,
        {
            method: "PUT",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload.deck)
        })
    const data = await response.json()

    if (response.ok) {
        await dispatch(updateDeckAction(data))
    }

    return data
}

export const deleteDeckThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/decks/${payload.deckId}`,
        {
            method: "DELETE",
        })
    const data = await response.json()

    if (response.ok) {
        await dispatch(deleteDeckAction(payload.deckId))
    }

    return data
}


// Reducer

const initialState = {}

const deckReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_DECKS: {
            action.payload.classes.forEach(deck => {
                newState[deck.id] = { ...newState[deck.id], ...deck }
            })
        }
        case CREATE_DECK: {
            newState[action.payload.id] = action.payload
            return newState
        }
        case UPDATE_DECK: {
            newState[action.payload.id] = {...newState[action.payload.id], ...action.payload}
            return newState
        }
        case DELETE_DECK: {
            newState = { ...state };
            delete newState[action.payload]
            return newState
        }
        default: {
            return state
        }
    }
}

export default deckReducer
