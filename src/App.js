
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createContext, useState } from 'react';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Home from './Component/Home/Home';
import Admin from './Component/Admin/Admin';
import Addbook from './Component/AddBook/Addbook';
import Checkout from './Component/Checkout/Checkout';
import Privateroote from './Privateroot/Privateroote';
import Order from './Component/Order/Order';
export const UserContext=createContext();
function App() {
  const [logInUser,setLogInUser]=useState({
       
  })
  return (
    <UserContext.Provider value={[logInUser,setLogInUser]}>
   <Router>
     <Header></Header>
     <h5 style={{backgroundColor:"yellow",display:'inline'}}>{logInUser.name}</h5>
     
     <Switch>
      
      <Route path="/home">
         <Home></Home>
      </Route>


       <Route path="/login"> 
       <Login></Login>
       </Route>

       <Privateroote  path="/admin">
         <Admin></Admin>
      </Privateroote>
      
      
      <Privateroote  path="/order">
         <Order></Order>
      </Privateroote>

      <Privateroote path="/checkout/:bookid">
       <Checkout></Checkout>
      </Privateroote>

       <Route exact to="/">
         <Home></Home>
      </Route>


     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
