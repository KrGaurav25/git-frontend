import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
const AdminNav=()=>{
  const navigate=useNavigate()
  const logoutMethod=()=>{
    localStorage.removeItem('accesstoken')
    navigate('/')
 }
  return (
    <div className='navbar-col'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                {/* <Link class="navbar-brand top" to='/'><img src='https://cdn.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.webp'></img></Link> */}
                <Link class="navbar-brand top" to='/'>
                    <img className='logo' src='https://cdn1.vectorstock.com/i/1000x1000/74/45/job-portal-lettering-logo-design-template-concept-vector-37017445.jpg' alt='jon portal logo'>
                    </img>
                </Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                        <Link class="nav-link active" to='/admindashboard'><h4 className='nav-icon mx-3'>Home</h4></Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/adminprofile'><h4 className='nav-icon mx-3'>Profile</h4></Link>
                        </li>


                        
                      
                        <li class="nav-item">
                        <i className='fa fa-sign-out logout ' style={{textDecoration: 'none', margin:"2rem"}} onClick={logoutMethod}><h4 className='nav-icon'>Logout</h4></i>
                        </li>

                        <li class="nav-item logout">
                        
                        </li>
                    </ul>
                </div>
                </div>
                </nav>
        </div>
    
  );
}

export default AdminNav;