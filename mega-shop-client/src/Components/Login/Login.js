import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
import googleIcon from '../../images/Group 573.png'

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }

const Login = () => {
    const [lpggedInUser, setLoggedInUser] = useContext(userContext);

    const provider = new firebase.auth.GoogleAuthProvider();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: ''
    
      })

      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };

      const handleSignIn = () => {
        firebase.auth().signInWithPopup(provider)
          .then(result => {
            const { displayName, email, photoURL } = result.user;
            const signedInUser = {
              isSignedIn: true,
              name: displayName,
              email: email,
              photo: photoURL
            }
    
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          })
          .catch(err => {
            console.log(err);
            console.log(err.message);
          })
      }
    
      const handleSignOut = () => {
        firebase.auth().signOut()
          .then(result => {
            const signedOutUser = {
              isSignedIn: false,
              name: '',
              email: '',
              photo: '',
              error: '',
              success: false
            }
    
            setUser(signedOutUser);
          })
          .catch(err => {
            console.log(err.message);
          })
      }
    return (
        <div className="mt-5 pt-5 text-center">
            <button className="btn btn-secondary" onClick= {handleSignIn}> <img style={{width: "40px"}} src={googleIcon} alt=""/>  Sign in with Google</button>
        </div>
    );
};

export default Login;