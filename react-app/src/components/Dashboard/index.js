import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserClassesThunk } from "../../store/class";

import Sidebar from "./Sidebar";

function Dashboard() {
    const dispatch = useDispatch()

    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        (async () => {
          await dispatch(getUserClassesThunk());
          setIsLoaded(true);
        })();
      }, [dispatch]);

    return isLoaded && (
        <div>
            <Sidebar />
        </div>
    )
}

export default Dashboard
