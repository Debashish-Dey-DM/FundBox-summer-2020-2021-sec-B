import LeftNavBar from './LeftNavBar';
import TopNavbar from './TopNavbar';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const ListOfAdvertise = () => {
    const history = useHistory();
    const [event, setEvent] = useState([]);
    const [isEvent, setIsEvent] = useState([]);
    const mount= async()=>{
        const res = await axios.get('http://localhost:8000/api/sp/allAdvertiser');
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
        <div className="sb-nav-fixed">
            <TopNavbar/>
            <div id="layoutSidenav">
                <LeftNavBar/>
                <div id="layoutSidenav_content">
                    <main>
                        <h1>its a heading</h1>
                    </main>
                </div>
            </div>
        </div>

    )
}

export default ListOfAdvertise
