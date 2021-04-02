import React, { useState } from 'react';

const EditShow = (props) =>{
    const{_id,name,author,price}=props.info
    const[iremove,setIremove]=useState(false)
    const delebtn=(id)=>{
        fetch(`https://salty-journey-68423.herokuapp.com/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=> setIremove(data))
    }
    return (
        <div className="col-md-12">
          
         {
             iremove===false?  <p>{name} {author} ${price} <button type="button" class="btn btn-info">Update</button> <button type="button" class="btn btn-danger" onClick={()=>delebtn(_id)}>Delete</button></p>:
             <p></p>
         }

        </div>
    );
};

export default EditShow;