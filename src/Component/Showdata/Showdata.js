import { CheckBoxTwoTone } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Showdata = (props) => {

    const history=useHistory()
    const checkbtn=(id)=>{
      const url=`/checkout/${id}`
      history.push(url)
    }
    const{_id,imgUrl,name,price,author}=props.info
    return (
        <div className="col-md-4">
            <div className="card" style={{width: "14rem"}}>
            <img src={imgUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
               <h5 className="card-title">{name}</h5>
               <p className="card-text">{author}</p>
               <h3>${price}</h3> <Link to={`/checkout/${_id}`} className="btn btn-primary" >Buy Now</Link>

              
      </div>
     </div>


     </div>
    );
};

export default Showdata;