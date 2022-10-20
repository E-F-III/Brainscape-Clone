// Action Types

const CREATE_DEMO_CLASS = "class/create-demo-class"

const GET_USER_CLASSES = "class/get-user-classes"

const CREATE_CLASS = "class/create-class"
const UPDATE_CLASS = "class/update-class"
const DELETE_CLASS = "class/delete-class"

const CLEAR_CLASSES = "class/clear-classes"

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

const createClassAction = payload => {
    return {
        type: CREATE_CLASS,
        payload
    }
}

const updateClassAction = payload => {
    return {
        type: UPDATE_CLASS,
        payload
    }
}

const deleteClassAction = payload => {
    return {
        type: DELETE_CLASS,
        payload
    }
}

export const clearClassesAction = () => {
    return {
        type: CLEAR_CLASSES
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

export const createClassThunk = payload => async dispatch => {
    const response = await fetch(
        '/api/classes',
        {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        }
    )
    const data = await response.json()

    if (response.ok) {
        await dispatch(createClassAction(data))
    }

    return data
}

export const updateClassThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/classes/${payload.classId}`,
        {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload.classData)
        }
    )
    const data = await response.json()

    if (response.ok) {
        await dispatch(updateClassAction(data))
    }

    return data
}

export const deleteClassThunk = payload => async dispatch => {
    const response = await fetch(
        `/api/classes/${payload.classId}`,
        {
            method: "DELETE"
        }
    )
    const data = await response.json()

    if (response.ok) {
        await dispatch(deleteClassAction(payload.classId))
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
        case CREATE_CLASS: {
            newState[action.payload.id] = action.payload
            return newState
        }
        case UPDATE_CLASS: {
            newState[action.payload.id] = {...newState[action.payload.id], ...action.payload}
            return newState
        }
        case DELETE_CLASS: {
            newState = { ...state };
            delete newState[action.payload]
            return newState
        }
        case CLEAR_CLASSES: {
            newState = {}
            return newState
        }
        default: {
            return state
        }
    }
}

export default classReducer
