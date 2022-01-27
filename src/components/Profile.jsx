/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Navbar from './Navbar';
const Profile = () => {
  return (
       <>
    <Navbar/>
    <div style={{maxWidth:"550px", margin:"0px auto"}}>
  
       <div style={ {
           display:"flex",
           justifyContent:"space-around",
           margin:"18px 0px",
           borderBottom:"1px solid grey"
       }}>
           <div>
               <img style={{width:"160px", height:"160px",borderRadius:"80px"}}
               src="https://avatars.githubusercontent.com/u/71636845?v=4"
               ></img>
          
          
           </div>
           
               <div>
               <h4>Rimjhim Kumari</h4>
               <div style={{
                display:"flex",
                justifyContent:"space-around",
                 width:"108%"
               }}>
                   <h6>30 posts</h6>
                   <h6>30 followers</h6>
                   <h6>30 following</h6>
               </div>
           </div>
       </div>
    <div className="gallery">
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
        <img className="item" src="https://avatars.githubusercontent.com/u/71636845?v=4"/>
       
    </div>
    </div>
    </>
)
};
export default Profile;
