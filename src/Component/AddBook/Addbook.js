import axios from 'axios';
import React, {  useState } from 'react';
import { useForm } from "react-hook-form";

const Addbook = () => {
    
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
        const newObj={
            name:data.Name,
            price:data.Price,
            author:data.Author,
            imgUrl:imgurl,
            date: new Date(),
            quantity:1
        }
         console.log(newObj)
        
        fetch('https://salty-journey-68423.herokuapp.com/addbook',{
            method:'POST',
            headers:{'Content-Type':'application/json'}, 
            body:JSON.stringify(newObj) 
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
     
    const[imgurl,setImgurl]=useState(null)

    const handleimg=event=>{
         const imgData= new FormData();
         imgData.set("key", "0ec0cd63603540733be8519865458e89")
         imgData.append("image", event.target.files[0])

         axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            console.log(response.data.data.display_url);
            setImgurl(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="" />Name: <input name="Name" ref={register} /><br/><br/>
      <label htmlFor="" />Price: <input name="Price" ref={register} /><br/><br/>
      <label htmlFor="" />Authore Name: <input name="Author" ref={register} /><br/><br/>
      <label htmlFor="" />Add book cover: <br/> <input name="exampleRequired" type="file" onChange={handleimg}  /><br/><br/>
    
      <input type="submit" />
    </form>
        </div>
    );
};

export default Addbook;