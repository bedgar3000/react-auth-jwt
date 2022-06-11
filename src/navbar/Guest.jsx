import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

function Guest() {
   return (
      <>
         <nav className="navbar navbar-expand-sm bg-light">
            <div className="container-fluid">
               <span className="navbar-brand">Navbar</span>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                     <Link className="nav-link" to="/login">Login</Link>
                     <Link className="nav-link" to="/register">Register</Link>
                  </div>
               </div>
            </div>
         </nav>

         <div className="container">
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
            </Routes>
         </div>

      </>
   );
}

export default Guest;
