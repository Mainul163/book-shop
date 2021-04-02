import React, { useEffect, useState } from 'react';
import EditShow from '../EditShow/EditShow';

const Edit = () => {
    const[deleteinfo,setDeleteifo]=useState([])
    useEffect(()=>{
        fetch('https://salty-journey-68423.herokuapp.com/showBook')
        .then(res=>res.json())
        .then(data =>setDeleteifo(data))
    },[])
    return (
        <div>
          {
              deleteinfo.map(del => <EditShow info={del}></EditShow>)
          }
        </div>
    );
};

export default Edit;