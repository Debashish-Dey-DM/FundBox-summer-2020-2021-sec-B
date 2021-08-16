import React from 'react'
import axios from 'axios';
import { useParams } from "react-router";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const OrgBlock = () => {
    const history = useHistory();
    const { id: id } = useParams();
    
    const mount= async()=>{
        const res = await axios.get(`http://localhost:8000/api/admin/manageOrg/block/${id}`);
        console.log(res.data.message);
        if (res.status === 200) {
            setTimeout(() => { history.push('/admin/orgManage'); }, 0);
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
export default OrgBlock