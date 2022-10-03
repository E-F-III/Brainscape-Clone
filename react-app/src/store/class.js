// Action Types

const CREATE_DEMO_CLASS = "class/create-demo-class"

const GET_USER_CLASSES = "class/get-user-classes"

// Action Creators

const createDemoClassAction = payload => {
    return {
        type: CREATE_DEMO_CLASS,
        payload
    }
}

const getUserClassesAction = payload => {
    return {
        type: GET_USER_CLASSES,
        payload
    }
}

// Thunk Action Creators

export const createDemoClassThunk = () => async dispatch => {
    const response = await fetch(
        '/api/classes',
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'My first class', description: '' })
        })

    const data = await response.json()

    if (response.ok) {
        await dispatch(createDemoClassAction(data))
    }

    return data
}

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
            newState = {}
            action.payload.classes.forEach(singleClass => {
                newState[singleClass.id] = { ...newState[singleClass.id], ...singleClass }
            })
            return newState
        }
        case CREATE_DEMO_CLASS: {
            newState[action.payload.id] = action.payload
            return newState
        }
        default: {
            return state
        }
    }
}

export default classReducer
