import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState,useEffect} from 'react';
import LeftNavBar from '../Layout/LeftNavBar';
import TopNavbar from '../Layout/TopNavbar';

const OrgPendingList = () => {
    let serial = 0;
    const [getEvent, setGetEvent] = useState([]);
    const getPendingOrg= async()=>{
        const res = await axios.get('http://localhost:8000/api/admin/pendingOrg');
        console.log(res.data);
        
        if (res.status === 200) {
            setGetEvent(res.data)
        }
    }

    const acceptOrg= async(id)=>{
        const res = await axios.get(`http://localhost:8000/api/admin/pendingOrg/accept/${id}`);
        if (res.status === 200) {
            getPendingOrg(); 
        }
            
    }

    const deleteOrg = async(id)=>{
        const res = await axios.get(`http://localhost:8000/api/admin/pendingOrg/delete/${id}`);
        if (res.status === 200) {
            getPendingOrg(); 
        }
            
    }
    

    
    useEffect(() => {
        getPendingOrg();    
    }, []);

    return (
        <div className="sb-nav-fixed">
            <TopNavbar/>
            <div id="layoutSidenav">
                <LeftNavBar/>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="col-sm-12 offset-sm-0" style={{ "marginTop" :"0px"}}>
                            <div className="card">
                                <div className="card-header" style={{ "padding" :"5px"}}>
                                    <h4 className="card-title"> Pending Sponsor List </h4>
                                </div>
                                <div className="class-body">
                                    <table className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>SL</th>
                                                <th>Name</th>
                                                <th>Info</th>
                                                <th>Status</th>
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
                                                            <small> <b>UserId:</b> {e.user_id} </small>
                                                        </td>
                                                        <td>
                                                            <small> <b>Phone:</b> {e.phone} </small>  <br/>
                                                            <small> <b>Address:</b> {e.address} </small> <br/>
                                                        </td>
                                                        <td>Pending</td>
                                                        <td>
                                                            <a className="btn btn-success btn-sm foat-end"  onClick={()=> acceptOrg(e.id)}  aria-hidden="true" style={{"color": "#ffffff"}}>Accept</a>
                                                            <a className="btn btn-danger btn-sm foat-end"  onClick={()=> deleteOrg(e.id)}  aria-hidden="true" style={{"color": "#ffffff"}}>Delete</a>
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
                    </main>
                </div>
            </div>
        </div> 
    )
}
export default OrgPendingList;