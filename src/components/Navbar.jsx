import React from 'react';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return(
    <nav>
    <div class="nav-wrapper">
    <Link to="/" class="brand-logo left b">ThE Social Network</Link>
  <ul id="nav-mobile" class="right hide-on-med-and-down">
   
      <li><Link to="/">Home</Link></li>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/createpost">Createpost</Link></li>
   </ul>
  </div>
  </nav>


)
};

export default Navbar;
