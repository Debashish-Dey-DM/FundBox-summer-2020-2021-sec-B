import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState} from 'react';
import { useHistory } from "react-router-dom";
const CreateAdmin = () => {
    const history = useHistory();
    const [user, setUser] = useState({
        admin_name: '',
        username:'',
        admin_email:'',
        admin_password:'',
        admin_confirm_assword:'',
        admin_phone:'',
        status: '1'
    });
    const [msg, setMsg] = useState(" ");
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({  ...user,[name]: [value]})
        console.log(name, value);
        
    }
    const addAdmin = async (e) => {
        e.preventDefault();
        const admin_name = user.admin_name.toString();
        const username =user.username.toString();
        const admin_email =user.admin_email.toString();
        const admin_password =user.admin_password.toString();
        const admin_confirm_assword =user.admin_confirm_assword.toString();
        const admin_phone =user.admin_phone.toString();
        const status =user.status.toString();
        const res = await axios.post('http://localhost:8000/api/admin/createAdmin', { admin_name: admin_name,username: username,admin_email:admin_email,admin_password:admin_password,admin_confirm_assword:admin_confirm_assword,admin_phone:admin_phone,status:status});
        if (res.data.status === 200) {
            console.log(res.data.message);
            setMsg(res.data.message);
            setUser({ 
                admin_name: '',
                username:'',
                admin_email:'',
                admin_password:'',
                admin_confirm_assword:'',
                admin_phone:'',
                status: '1'
            })
            setTimeout(() => { history.push('/admin/createAdmin'); }, 500);
            
        }
        else if (res.data.status === 240) {
            setMsg(res.data.message);
            setUser({ 
                username:''
            })
        }
        else {
            setMsg(res.data.message);
            setUser({ 
                username:''
            })
        }
    }

    return (
        <div className="col-sm-6 offset-sm-3" style={{ "marginTop" :"50px"}}>
            <div className="card">
                <div className="card-header" style={{ "padding" :"5px"}}>
                    <h4>
                    <Link to={'/admin/dashboard'} className="btn btn-primary btn-sm foat-end"> Back</Link>
                    </h4>
                
                    <h4 className="card-title">Create New Admin </h4>
               </div>
                <div className="card-content">
                    <div className="card-body">  
                        <form onSubmit={addAdmin} >
                                            
                            <div className="row">
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <input type="text" className="form-control" name="admin_name" placeholder="Full Name" onChange={handleInput} required />
                                </div>
                                <div className="col-12 col-sm-12 col-lg-6" style={{ "marginTop" :"10px"}}>
                                    <input type="text" className="form-control" name="username" placeholder="Username" onChange={handleInput} required/>
                                </div>
                            
                                <div className="col-12 col-sm-12 col-lg-6" style={{ "marginTop" :"10px"}}>
                                    <input type="email" className="form-control" name="admin_email" placeholder="Email" onChange={handleInput} required/>
                                </div>

                                <div className="col-12 col-sm-12 col-lg-6" style={{ "marginTop" :"10px"}}>
                                    <input type="password" className="form-control" name="admin_password" placeholder="Password" onChange={handleInput} required/>
                                </div>

                                <div className="col-12 col-sm-12 col-lg-6" style={{ "marginTop" :"10px"}}>
                                    <input type="password" className="form-control" name="admin_confirm_assword" placeholder="Confirm Password" onChange={handleInput} required/>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-6" style={{ "marginTop" :"10px"}}>
                                    <input type="number" className="form-control" name="admin_phone" placeholder="Phone number" onChange={handleInput} required/>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-lg-12" style={{ "marginTop" :"10px"}}>
                                    <fieldset className="form-group">
                                        <select name="status" className="form-control" id="basicSelect" onChange={handleInput} required>
                                            <option disabled defaultValue>Select Status</option>
                                            <option value="1">Active</option>
                                            <option value="0">Deactivate</option>
                                        </select>
                                    </fieldset>
                                </div>

                                <div className="col-12 col-sm-12" style={{ "marginTop" :"10px"}}>
                                    <button type="submit" className="btn btn-block btn-success glow">Add</button>
                                </div>
                                <h4 className="card-title" style={{ "padding" :"5px"}}>{msg} </h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CreateAdmin;