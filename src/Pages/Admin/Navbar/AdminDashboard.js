import React, { useState } from "react";
import AdminNav from "./AdminNav";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";
import "../../../CSS/AdminDashboard.css"
import Card from  "../../../Pages/Userdashboard/card"
function AdminDashboard(){
  const{jobdata}=useSelector((state)=>state.login)
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    useEffect(()=>{
        const userid = localStorage.getItem('userId');
        console.log("userid",userid);
        axios.post('http://localhost:9000/profile',{userid})
        .then((res)=>{
            console.log("res from profile = ",res.data);
            setName(res.data.name);
            setEmail(res.data.email)
        })
        .catch((err)=>{
            console.log("err from profile",err);
        })
    },[])
    return(
        <>
            <AdminNav></AdminNav>
            <div className="back-image-dash">
            <div className="row ">
            <div className="admin-calen">
<div className="admin-cont col-sm-6">
<h3 className="text-shruthi"> Welcome {name}</h3>
<h3 className="text-shruthi">Email: {email}</h3>
<div className="admin-cont-two">
    <img  class="admin-cont-pic" src="https://cdn.pixabay.com/photo/2020/08/06/10/23/woman-5467535_1280.png"/>
    
</div>

</div>

<div className="day-month col-sm-6">
<div class="month">      
  
      <h1>September<br/>
      <span >2021</span></h1>

</div>
<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">  
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li>10</li>
  <li>11</li>
  <li>12</li>
  <li>13</li>
  <li>14</li>
  <li><span class="active">15</span></li>
  <li>16</li>
  <li>17</li>
  <li>18</li>
  <li>19</li>
  <li>20</li>
  <li>21</li>
  <li>22</li>
  <li>23</li>
  <li>24</li>
  <li>25</li>
  <li>26</li>
  <li>27</li>
  <li>28</li>
  <li>29</li>
  <li>30</li>
  <li>31</li>
</ul>
</div>

</div>
</div>
<div>
<h2 className="text-admin-dash">You Need to Hire!!</h2>
<div class="row"> 
  <div class="col-sm-3 ">
    <div className="card colour card-1">
      <div class="card-body">
        <h1 class="card-title">4</h1>
        <Link to="/applicants"  className="card-link"><h3 class="card-text">Applicants</h3></Link>
        <i class="fa fa-user card-icon"></i>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card colour card-2">
      <div class="card-body">
        <h1 class="card-title">2</h1>
        <Link to="/myEmployees" className="card-link"><h3 class="card-text">Employees</h3></Link>
        <i class="fa fa-file card-icon"></i>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card colour card-3">
      <div class="card-body">
        <h1 class="card-title">7</h1>
        <h3 class="card-text">Notifications</h3>
        <i class="fa fa-envelope card-icon"></i>
      </div>
    </div>
  </div>
  <div class="col-sm-3 ">
    <div class="card colour card-4">
      <div class="card-body">
        <h1 class="card-title">12</h1>
        <Link to="/myjobs" className="card-link"><h3 class="card-text">Bookmark Jobs</h3></Link>
        <i class="fa fa-bookmark-o card-icon"></i>

      </div>
    </div>
  </div>
  </div>

</div>
<img src="https://t3.ftcdn.net/jpg/02/33/12/44/240_F_233124436_78mVMPy74gldjeo6rdyJgRklPIGSAwl7.jpg" className="pic-admin thumbnail" alt="..."/>
<h1 className='text-admin-dash'>Hire character. Train skill </h1>
<h2 className='text-admin-dash'>It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do</h2>
<div className="admin-colour-container">
    <h2 className="admin-text">Acquiring the right talent is the most important key to growth. Hiring was — and still is — the most important thing we do</h2><div className="container-admin">
<img src="https://t4.ftcdn.net/jpg/04/96/27/97/240_F_496279754_N7gxd0CWlsLn952lCWHnss3TrA1s90b2.jpg" class="pic-admin thumbnail" alt="..."/>

<button className="btn"><Link className="link-admin" to="/addjobs">Post Job</Link></button>

</div>
</div>

<div className="admin-colour-container two">
    <h2 className="admin-text">The most dangerous leadership myth is that leaders are born-that there is a genetic factor to leadership. That’s nonsense; in fact, the opposite is true. Leaders are made rather than born.</h2><div className="container-admin c-2">
<img src="https://img.freepik.com/free-photo/diverse-people-working-office_53876-104681.jpg?size=626&ext=jpg&ga=GA1.2.1034677208.1662904499" class="thumbnail " alt="..."/>

</div>
</div>

</div>


</>

    )
}
export default AdminDashboard