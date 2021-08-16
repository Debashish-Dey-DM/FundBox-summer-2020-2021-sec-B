import React from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const OrgDelete = () => {
    const history = useHistory();
    const { id: id } = useParams();
    
    const mount= async()=>{
        const res = await axios.get(`http://localhost:8000/api/admin/pendingOrg/delete/${id}`);
        if (res.status === 200) {
            setTimeout(() => { history.push('/admin/pendingOrg'); }, 0);
        }
            
    }

    useEffect(() => {
        mount();  
         }, []);
    
    return (
        <>
        </>
    )
}
export default OrgDelete