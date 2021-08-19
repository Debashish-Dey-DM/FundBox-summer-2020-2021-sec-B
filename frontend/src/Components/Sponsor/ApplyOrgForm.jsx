import LeftNavBar from './LeftNavBar';
import TopNavbar from './TopNavbar';
import React from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
//import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function ApplyOrgForm() {
    const history = useHistory();
    const [orgApply, setOrgApply] = useState({
        title: '',
        details: '',
        amount: '',
        startDate: '',
        endDate: '',
        org_Id: '',
        image:''
    });
    const { id } = useParams();
    const [msg, setMsg] = useState(" ");
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setOrgApply({ ...orgApply, [name]: [value] })
        console.log(name,value);
    }
    const applyOrgForm = async (e) => {
        e.preventDefault();
        const title = orgApply.title.toString();
        const details =orgApply.details.toString();
        const amount =orgApply.amount.toString();
        const startDate =orgApply.startDate.toString();
        const endDate = orgApply.endDate.toString();
        const org_Id = orgApply.org_Id.toString();
        const res = await axios.post(`http://localhost:8000/api/sp/ApplyOrgForm/${id}`, { title: title, details: details, amount:amount, startDate: startDate, endDate : endDate, org_Id:org_Id});
        if (res.data.status === 200) {
            console.log(res.data.message);
            setMsg(res.data.message);
            setOrgApply({ 
                title: '',
                details: '',
                amount: '',
                startDate: '',
                endDate: '',
                org_Id: '',
                image:''
            })
            
             setTimeout(() => { history.push('/sp/ApplyOrg'); }, 3000);
        }
        else if (res.data.status === 240) {
            setMsg(res.data.message);
            setOrgApply({ 
                title: '',
                details: '',
                amount: '',
                startDate: '',
                endDate: '',
                org_Id: '',
                image:''
            })
        }
        else {
            setMsg(res.data.message);
            setOrgApply({ 
                title: '',
                details: '',
                amount: '',
                startDate: '',
                endDate: '',
                org_Id: '',
                image:''
            })
        }
    }

    return (
        <div className="sb-nav-fixed">
            <TopNavbar/>
            <div id="layoutSidenav">
                <LeftNavBar/>
                <div id="layoutSidenav_content">
                    <main className="containerNew">
                        
                        <form onSubmit={applyOrgForm} >
                            <h3>Add Advertise</h3>
                            <div className="form-group">
                                <input type="text" className="form-control" name="org_Id"  placeholder={id} onChange={handleInput} />
                                
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="title"  placeholder="Title" onChange={handleInput} />
                                <small className="form-text text-muted">Please add e proper title</small>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="details"  placeholder="Details" onChange={handleInput} />
                                <small className="form-text text-muted">Please add a details</small>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="amount"  placeholder="Amount" onChange={handleInput} />
                                <small className="form-text text-muted">amount</small>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" name="startDate"  onChange={handleInput} />
                                <small className="form-text text-muted">Start Date</small>
                            </div>
                            <div className="form-group">
                                <input type="date" className="form-control" name="endDate"  onChange={handleInput} />
                                <small className="form-text text-muted">End Date</small>
                            </div>
                            <div className="form-group">
                                <input type="file" className="form-control" name="image" />
                                <small className="form-text text-muted"></small>
                            </div>
                            <button type="submit" style={{"marginTop" : "15px"}} className="btn btn-primary">Submit</button>
                            <h4 className="card-title" style={{ "padding" :"5px"}}>{msg} </h4>
                        </form>

                    </main>
                </div>
            </div>
        </div>
    )
}
export default ApplyOrgForm
