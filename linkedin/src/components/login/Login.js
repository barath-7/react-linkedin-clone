import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/userSlice'
import { auth } from '../../firebase'
import './Login.css'
const Login = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [profile, setProfile] = useState('')
    const dispatch = useDispatch()

    const nameChangeHandler =(event) =>{
        setName(event.target.value)
    }
    const emailChangeHandler =(event) =>{
        setEmail(event.target.value)
    }
    const passwordChangeHandler =(event) =>{
        setPassword(event.target.value)
    }
    const profilePicChangeHandler =(event)=>{
        setProfile(event.target.value)
    }
    const loginToApp =(event) =>{
        event.preventDefault()
    }
    
    const register =() =>{
        if(name.length===0){
            return alert("Please enter Full Name")
        }

        auth.createUserWithEmailAndPassword(email,password)
        .then(authUSer=>{
            authUSer.user.updateProfile({
                displayName:name,
                photoURL:profile

            })
            .then(()=>{
                dispatch(login({
                    email:authUSer.user.email,
                    uid:authUSer.user.id,
                    displayName:name,
                    photoURL:profile
                }))
            })
        })
    }
  return (
    <div className="login">
        {/* <img src="https://hdwallsource.com/img/2018/9/linkedin-logo-desktop-wallpaper-65635-67867-hd-wallpapers.jpg" alt="logo" /> */}
        <img src="https://logos-world.net/wp-content/uploads/2020/04/Linkedin-Logo.png" alt="logo" />
        <form>
            <input type="text" placeholder='Full Name (required if registering)' value={name} onChange={nameChangeHandler}/>
            <input type="text" placeholder='Profile pic url (optional)' onChange={profilePicChangeHandler} />
            <input type="email" name="" id="" placeholder='Email' value={email} onChange={emailChangeHandler}/>
            <input type="password" name="" id="" placeholder='Password' value={password} onChange={passwordChangeHandler}/>
           <button onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member? <span onClick={register} className='login__register'>Register now</span></p>
    </div>
  )
}

export default Login