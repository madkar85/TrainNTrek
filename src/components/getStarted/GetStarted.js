import React, { useState } from 'react'
import "./GetStarted.css"
import "../recentActicity/RecentActivity"
import RecentActivity from '../recentActicity/RecentActivity'

//The View-button on the home page

function GetStarted() {
    const [show, setShow] = useState(false);

    const ShowStats = () => {
        setShow(!show);
    }

    return (
        <>
            <button className="view-btn" onClick={ShowStats}>View</button>
            <RecentActivity show={show} />
        </>
    )
}

export default GetStarted



