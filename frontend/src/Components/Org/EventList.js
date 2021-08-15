import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const EventList = () => {
    const history = useHistory();
    const [event, setEvent] = useState([]);
    const [isEvent, setIsEvent] = useState([]);
    const mount= async()=>{
        const res = await axios.get('http://localhost:8000/api/eventList');
        console.log(res.data);
        
        if (res.status === 200) {
            setEvent(res.data)
             
        }
            
    }
    // const deleteEvent = (e) => {
    //     console.log("deleted");
    //       setTimeout(() => { history.push('/org/EventList'); }, 1000);
    // }
     useEffect(() => {
    mount();
        
     }, []);
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="class-header">
                                <h4> Events
                                {/* <Link to={'add-student'} className="btn btn-primary btn-sm foat-end"> Add Student</Link> */}
                                </h4>
                            </div>
                            <div className="class-body">
                                <table className="table table-bordered table-striped">
                                    <thead>
                                        
                                        <tr>
                                            <th>ID</th>
                                            <th>Event Name</th>
                                            <th>Target Money</th>
                                            <th>Event Type</th>
                                            <th>Edit</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        event.map((e) => {
                                            return (
                                                <tr key={e.id} >
                                                    <td>{e.id}</td>
                                                    <td>{e.event_name}</td>
                                                    <td>
                                                        {e.eventType === 2 ? 'Normal Event' : `${e.targetMoney}$`}
                                                        </td>
                                                    <td>{e.eventType ===1 ? 'Normal Event' : 'Volunteer Event'}</td>
                                                    <td>
                                                        {/* <Link to={`edit-student/${e.id}`} className="btn btn-success btn-sm" >Edit</Link> */}
                                                        <Link to={`edit-event/${e.id}`} className="btn btn-primary btn-sm foat-end"> Event List</Link><br />
                                                    </td>
                                                    <td>
                                                        <Link to={`delete-event/${e.id}`} className="btn btn-danger btn-sm foat-end" > Delete </Link>
                                                        {/* <button className="btn btn-danger btn-sm foat-end" onClick={deleteEvent}>Delete</button> */}
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                            </div>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EventList;