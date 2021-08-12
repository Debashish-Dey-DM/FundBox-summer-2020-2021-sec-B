import React from 'react'
import { Link } from 'react-router-dom';
 const OrgHome = () => {
    return (
        <div>
            <Link to={'/createEvent'} className="btn btn-primary btn-sm foat-end"> Create New Event</Link>
            
        </div>
    )
}
export default OrgHome;