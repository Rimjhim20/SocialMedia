import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} /> 
        <Route path='/profile' element={<Profile/>} /> 
        <Route path='/createpost' element={<CreatePost/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
