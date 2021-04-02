import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import Addbook from '../AddBook/Addbook';
import Edit from '../Edit/Edit';

const Admin = () => {
    const style={
        backgroundColor:'#22316C',
        height:'514px',
        color:"whitesmoke",
        textAlign:"center"
    }
   
    return (
        <Router>
            <div className='row'>
             <div style={style} className='col-md-3'>
                 <h1><PlaylistAddIcon></PlaylistAddIcon> Book-Shop</h1>
             <Link style={{textDecoration:'none',color:"whitesmoke"}} to="/addbook"><AddIcon></AddIcon> Addbook</Link><br/>
             <Link style={{textDecoration:'none',color:"whitesmoke"}} to="/edit"><ListIcon></ListIcon> EditBook</Link>
             </div>



             <div className='col-md-9'>
             <Switch>
                      <Route path="/addbook">
                      <Addbook></Addbook>
                      </Route>
                      <Route path="/edit">
                          <Edit></Edit>
                      </Route>
                      <Route exact="/admin">
                      <Addbook></Addbook>
                      </Route>
                  </Switch>
             </div>
            </div>
            

        </Router>
    );
};

export default Admin;