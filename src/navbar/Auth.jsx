import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import AuthUser from "../components/AuthUser";

function Auth() {
    const { token, logout } = AuthUser();

    const logoutUser = () => {
        console.log(token);
        
        if (token !== undefined) {
            console.log("logout");
            logout();
        }
    };

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
                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>

        </>
    );
}

export default Auth;
