import React from 'react';
import moment from 'moment'
const PersonalData = (props) => {
    const{name,email,price,quantity,data}=props.dataInfo
    const style={
        border:"1px solid red",
        boxShadow:"10px 10px 10px gray"
    }
    return (
        <div style={style} className='container'>
            <br/><br/>
            <h5>User Email: {email}</h5>
            <h5>Book Name: {name}</h5>
            <h5>Price: {price}</h5>
            <h5>Quantity: {quantity}</h5>
            <h5>Date/Time: {moment(data).format("LLLL")}</h5>

            

        </div>
    );
};

export default PersonalData;