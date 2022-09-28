import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserClassesThunk } from '../../store/class'

function UserClassList() {
    const dispatch = useDispatch()
    const classes = useSelector(state => state.classes)
    const classList = Object.values(classes)

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        dispatch(getUserClassesThunk())
            .then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded && (
        <div>
            {
                classList.map( singleClass => (
                    <div>{singleClass.title}</div>
                ))
            }
        </div>
    )
}

export default UserClassList
