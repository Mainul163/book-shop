import React, { useEffect, useState } from 'react';
import Showdata from '../Showdata/Showdata';

const Home = () => {
    const[showData,setShowData]=useState([])
    useEffect(()=>{

        fetch('https://salty-journey-68423.herokuapp.com/showBook')
        .then(res=>res.json())
        .then(data=>setShowData(data))

    },[])
    return (
        <div className="container row" >
           {
               showData.map(da=><Showdata info={da}></Showdata>)
           }
        </div>
    );
};

export default Home;