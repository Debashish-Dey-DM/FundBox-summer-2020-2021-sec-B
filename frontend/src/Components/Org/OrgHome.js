import React from 'react'
import { Link } from 'react-router-dom';
 const OrgHome = () => {
    return (
        <div className="col-sm-6 offset-sm-3">
            <p><Link to={'/org/createEvent'} className="btn btn-primary btn-sm foat-end"> Create New Event</Link><br /> </p>

           <p><Link to={'/org/createVolEvent'} className="btn btn-primary btn-sm foat-end"> Create New Volunteer  Event</Link><br /> </p>

            <p><Link to={'/org/EventList'} className="btn btn-primary btn-sm foat-end"> Event List</Link><br /> </p>

            <p><Link to={'/org/EventTransactionList'} className="btn btn-primary btn-sm foat-end"> Event Transaction List</Link><br /> </p>
        </div>
    )
}
export default OrgHome;