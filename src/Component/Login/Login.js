import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './fairebasse.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}
const Login = () => {
    const[logInUser,setLogInUser]=useContext(UserContext)
    const provider = new firebase.auth.GoogleAuthProvider();
    const[person,setPerson]=useState({
        name:'',
        email:''
    })
    let history=useHistory();
    let location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    const googleSingIn=()=>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
         var credential = result.credential;
          var token = credential.accessToken;
          var user = result.user;
          const{displayName,email}=user
           
           const userPerson={
               name:displayName,
               email:email
           }
           setPerson(userPerson)
           setLogInUser(userPerson)
           history.replace(from);
        }).catch((error) => {
          
          var errorCode = error.code;
          var errorMessage = error.message;
         
          var email = error.email;
        
          var credential = error.credential;
          
        });
    }
    return (
        <div style={{textAlign:"center"}}>
            <button className="btn btn-primary" onClick={googleSingIn}>Google sign in</button>
            <h1>{person.name}</h1>
        </div>
    );
};

export default Login;