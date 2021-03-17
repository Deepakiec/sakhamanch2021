import React from 'react';
import {auth, provider} from './firebase';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';
import './Login.css';

export default function Login() {
const [state, dispatch]=useStateValue();

    const signIn=(event)=>{
        console.log(auth);
        auth
           .signInWithPopup(provider)
           .then(result=>{
               dispatch({
                   type:actionTypes.SET_USER,
                   user:result.user
               })
            console.log(result.user);
        })
        .catch((error)=>alert(error.message))
        console.log(event.target.value);
    }
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://i.pinimg.com/originals/f7/9f/89/f79f89f47334f45525b4e43617982256.jpg" width="100" height="100" alt='sakhamanch'/>
               
            </div>
               <span>SakhaManch</span>
            <button type="submit" onClick={signIn}>SignIn</button>
        </div>
    )
}
