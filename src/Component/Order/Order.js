import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import PersonalData from '../PersonalData/PersonalData';

const Order = () => {
    const[show,setShow]=useState([])
    const[logInUser,setLogInUser]=useContext(UserContext)
    console.log(logInUser.email)
    useEffect(()=>{
        fetch(`https://salty-journey-68423.herokuapp.com/ordershow?email=${logInUser.email}`)
        .then(res=>res.json())
        .then(data=>setShow(data))
    },[])
    return (
        <div>
            {
                show.map(info=><PersonalData dataInfo={info}></PersonalData>)
            }

        </div>
    );
};

export default Order;