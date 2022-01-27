import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import Navbar from './Navbar';
const Signup = () => {
  const history = useNavigate()
  const[name,setname]= useState("")
  const[password,setpassword]= useState("")
  const[email,setemail]= useState("")
  const PostData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
M.toast({html:"Invalid email id", classes:"#c62828 red darken-3 "})
    return
}
    fetch("/signup",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name:name,
        password:password,
        email:email

      })
    }).then(res=>res.json()).then(data=>{
  
   if(data.error){
    M.toast({html: data.error, classes:"#c62828 red darken-3 "})
   } 
     else{
      M.toast({html: data.message,classes:"#ce93d8 purple lighten-3 "})
    history("/login") 
    }
    }).catch(err=>{
      console.log(err)
    })
  }
  return (
     <div className="mycard ">
  <Navbar/>
  <div className="card auth-card ">
      <h3>The Social Network</h3>
      <input type="text" placeholder="Enter your name"
      value={name}
      onChange={(e)=>{
        setname(e.target.value)
      }}
      />
      <input type="text" placeholder="email"
       value={email}
       onChange={(e)=>{
         setemail(e.target.value)
       }}
      />
      <input type="password" 
      placeholder="password"
      value={password}
      onChange={(e)=>{
        setpassword(e.target.value)
      }}
      
      />
      <button 
      onClick={()=>{
        PostData()
      }}
      className="btn waves-effect waves-light #e57373 red lighten-2" type="submit" name="action">Signup
    <i class="material-icons right">send</i>
   </button>
  <h6>
 <Link to="/login"> Already  have an account? Click here</Link>
 </h6>
  </div>
  </div>
  )
};
export default Signup;
