import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Checkout = () => {
    const{bookid}=useParams()
    const[bookinfo,setBookinfo]=useState([])

    const booklist=bookinfo.find(data=>data._id===bookid)

   const[logInUser,setLogInUser]=useContext(UserContext)
    console.log(booklist)
    
    useEffect(()=>{
        fetch('https://salty-journey-68423.herokuapp.com/showBook')
        .then(res=>res.json())
        .then(data=>setBookinfo(data))


    },[])
  const handlebtn=(data)=>{
   const totallist={
      name:data.name,
      price:data.price,
      quantity:data.quantity,
      data:new Date()
    }

    const userBook={...logInUser,...totallist}
    fetch('https://salty-journey-68423.herokuapp.com/orderdata',{
      method:"POST",
      headers:{'Content-Type':'application/json'}, 
      body:JSON.stringify(userBook) 
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
    return (
        <div>
            <h3>checkout</h3>
        <table class="table">
          
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>{booklist?.name}</td>
            <td>{booklist?.quantity}</td>
            <td>{booklist?.price}</td>
            <td>{booklist?.date}</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td></td>
            <td></td>
            <td></td>
            <td><button onClick={()=>handlebtn (booklist)} className="btn btn-primary">Check Out</button></td>
          </tr>
         
        </tbody>
      </table>
      </div>
    );
};

export default Checkout;