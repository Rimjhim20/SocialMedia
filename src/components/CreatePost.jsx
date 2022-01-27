import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Mo from 'materialize-css'

const CreatePost = () => {
  
  const history = useNavigate();
  const[title,setTitle]= useState("")
  const[body,setBody]= useState("")
  const[image,setimage]= useState("")
  const[url,seturl]= useState("")
  const postDetails=()=>{
    const data= new FormData()
    data.append("file",image)
    data.append("upload_preset","social_media")
    data.append("cloud_name","rj20cloud")
    fetch("https://api.cloudinary.com/v1_1/rj20cloud/image/upload",{
method:"post",
body:data

    }).then(res=>res.json({data}))
    .then(data=>{
      seturl(data.url)
    }).catch(err=>{
      console.log(err);
    })
    fetch("/createpost",{
      method:"post",
      headers:{
        "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        
       title,
        body,
       pic:url

      })
    }).then(res=>res.json())
    .then(data=>{
  
   if(data.error){
   Mo.toast({html: data.error, classes:"#c62828 red darken-3 "})
   } 
     else{
     Mo.toast({html: "created post  sucessfully",classes:"#ce93d8 purple lighten-3 "})
    history("/") 
    }
    }).catch(err=>{
      console.log(err)
    })
  }
  return  (
      <>
    <Navbar/>
    <div className='card input-field'
    style={{
        margin:"10px auto",
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center"
    }}>
      
      <input type="text" placeholder='title'
      value={title}
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      />
      <input type="text" placeholder="Description"
       value={body}
       onChange={(e)=>{
         setBody(e.target.value)
       }}
      />
      <div class="file-field input-field">
      <div className="btn waves-effect waves-light #e57373 red lighten-2">
    <span>Upload photo</span>
    <input type="file"
    onChange={(e)=>{
      console.log(e.target.files)
      setimage(e.target.files[0])
    }}
    />
  </div>
  <div className="file-path-wrapper">
    <input className="file-path validate" type="text"/>
  </div>
    </div>
    <button className='btn waves-effect waves-light #e57373 red lighten-2'
    onClick={()=>postDetails()}
    >
    Upload Post

    </button>
    </div>
    </>
)
};

export default CreatePost;
