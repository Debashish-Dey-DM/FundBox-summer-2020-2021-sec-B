import React from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
const DeleteCategory = () => {
    const history = useHistory();
    const { id: cat_id } = useParams();
    const [ename, seteName] = useState("");
    
    const deleteEvent = async (e) => {
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Deleting";
        const res = await axios.post('http://localhost:8000/api/admin/eventCategory/delete', { cat_id: cat_id});
        if (res.data.status ===200) {
            console.log(res.data.message);
            setTimeout(() => { history.push('/admin/category'); }, 100);
        }else if(res.data.status === 240){
            console.log(res.data.message);
        }else{
            console.log(res.data.message);
        }
    }
    
    return (
        <div className="col-sm-6 offset-sm-3">
            <div className="alert alert-danger" role="alert">
                Are You Sure You Want to Delete Category
                <br />
                <br />
                <button className="btn btn-danger btn-sm foat-end" onClick={deleteEvent}>Delete</button>
            </div>
        </div>
    )
}
export default DeleteCategory