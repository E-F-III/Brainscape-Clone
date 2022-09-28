// Action Types

const GET_USER_CLASSES = "class/get-user-classes"

// Action Creators

const getUserClassesAction = payload => {
    return {
        type: GET_USER_CLASSES,
        payload
    }
}

// Thunk Action Creators

export const getUserClassesThunk = () => async dispatch => {
    const response = await fetch('/api/classes/session')
    const data = await response.json()

    if (response.ok) {
        await dispatch(getUserClassesAction(data))
    }

    return data
}

// Reducer

const initialState = {}

const classReducer = (state = initialState, action) => {
    let newState = { ...state }
    switch (action.type) {
        case GET_USER_CLASSES: {
            action.payload.classes.forEach(singleClass => {
                newState[singleClass.id] = { ...newState[singleClass.id], ...singleClass }
            })
            return newState
        }
        default: {
            return state
        }
    }
}

export default classReducer
