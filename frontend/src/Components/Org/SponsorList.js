import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
const SponsorList = () => {
    const [sponsor, setSponsor] = useState([]);
    const mount = async () => {
        const res = await axios.get('http://localhost:8000/api/sponsorList');
        console.log(res.data);
        
        if (res.status === 200) {
            setSponsor(res.data)
             
        }
    }
     useEffect(() => {
    mount();
        
     }, []);
    return (
        <div className="col-sm-6 offset-sm-3">
            <div className="restaurant-list-table">
        <div className="card">
            <div className="card-content">
                <div className="card-body">
                    
                    <div className="table-responsive">
                        <table id="seven-item-datatable" className="table">
                            <thead>
                                <tr>
                        <th style={{ "width": "5%" }}>Id</th>
                                    <th>Sponsor Name</th>
                                    <th>Title</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                                    
                            {sponsor.map((e)=>{
                                return (
                                        <tr key={e.id} >
                                                    <td>{e.id}</td>
                                                    <td>{e.name}</td>
                                                    <td>{e.title}</td>
                                                    <td>{e.amount}</td>
                                                    <td>
                                                        {/* <Link to={`edit-student/${e.id}`} className="btn btn-success btn-sm" >Edit</Link> */}
                                                        <Link to={`Cancel-deal/${e.id}`} className="btn btn-danger btn-sm foat-end"> Cancel Deal</Link><br />
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
export default SponsorList