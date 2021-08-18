import React from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
const CancelDeal = () => {
    const history = useHistory();
    const { id: eid } = useParams();
    const [ename, seteName] = useState("");

    const cancelSponsor = async (e) => {
        const thidClickedFunda = e.currentTarget;
        thidClickedFunda.innerText = "Canceling Deal";
        const res = await axios.post(`http://localhost:8000/api/cancelsponsor/${eid}`);
        if (res.status ===200) {
           
            setTimeout(() => { history.push('/org/SponsorList'); }, 3000);   
        }
    }

    
    
    
    return (
        <div className="col-sm-6 offset-sm-3">
            <div className="alert alert-danger" role="alert">
                Are You Sure You Want to Cancel the Sponsor?
                <br />
                <br />
                <button className="btn btn-danger btn-sm foat-end" onClick={cancelSponsor}>Cancel Deal</button>
            </div>
        </div>
    )
}
export default CancelDeal