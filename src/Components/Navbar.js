import "../CSS/Navbar.css"
import {Link } from "react-router-dom"
function Navbar(){
    return(
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/"><h1>Find Job</h1></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/"><h3>Home</h3> <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/"><h3>About</h3></a>
      </li>

        
      <li class="nav-item">
        <a class="nav-link" href="#"><h3>Contact</h3></a>
      </li>
    </ul>
    <form class="d-flex">
<button className="btn-0"><Link to="/login" className="login-link">Login</Link></button>
<button className="btn-1"><Link to="/signup"  className="login-link">Register</Link></button>
    </form>
  </div>
</nav>
    )
}
export default Navbar