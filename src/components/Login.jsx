import React, { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom'
import M from 'materialize-css'
import Navbar from './Navbar';
const Login = () => {
  const history = useNavigate()

  const[password,setpassword]= useState("")
  const[email,setemail]= useState("")
  const PostData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
M.toast({html:"Invalid email id", classes:"#c62828 red darken-3 "})
    return
}
    fetch("/login",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
       
        password,
        email

      })
    }).then(res=>res.json()).then(data=>{
  
   if(data.error){
    M.toast({html: data.error, classes:"#c62828 red darken-3 "})
   } 
     else{
       localStorage.setItem("jwt",data.token)
       localStorage.setItem("user",JSON.stringify(data.user))
      M.toast({html: "Sign in successfull",classes:"#ce93d8 purple lighten-3 "})
    history("/") 
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
   
   className="btn waves-effect waves-light #e57373 red lighten-2" type="submit" name="action">Login
 <i class="material-icons right"
 onClick={()=>{
  PostData()
}}>send</i>
</button>
<h6>
<Link to="/signup"> Don't  have an account? Click here</Link>
</h6>
</div>
</div>
)
};
export default Login;
