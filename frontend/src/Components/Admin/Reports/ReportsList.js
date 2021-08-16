import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState,useEffect} from 'react';

const ReportsList = () => {
    let serial = 0;
    const [getEvent, setGetEvent] = useState([]);
    const mount= async()=>{
        const res = await axios.get('http://localhost:8000/api/admin/reports');
        console.log(res.data);
        
        if (res.status === 200) {
            setGetEvent(res.data)
        }
    }

    
    useEffect(() => {
        mount();    
    }, []);

    return (
        <div className="col-sm-8 offset-sm-2" style={{ "marginTop" :"20px"}}>
            <div className="card">
                <div className="card-header" style={{ "padding" :"5px"}}>
                    <h4>
                    <Link to={'/admin/dashboard'} className="btn btn-primary btn-sm foat-end"> Back</Link>
                    </h4>
                
                    <h4 className="card-title"> Manage Sponsor </h4>
               </div>

                <div className="class-body">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User</th>
                                <th>Message</th>
                                <th>Reply</th>
                                <th>Event</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            getEvent.map((e) => {
                                return (
                                    <tr key={e.id} >
                                        <td>{serial += 1}</td>
                                        <td>
                                            {e.name} <br/>
                                            <small> <b>username:</b> {e.username} </small> 
                                        </td>
                                        <td>
                                            <small>{e.details} </small>  <br/>
                                        </td>
                                        <td>
                                            <small>{e.reply} </small>  <br/>
                                        </td>
                                        <td>{e.event_name}</td>
                                        <td>
                                            <Link to={`reportsReply/${e.id}`} className="btn btn-primary btn-sm foat-end" > Reply </Link>
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
    )
}
export default ReportsList;