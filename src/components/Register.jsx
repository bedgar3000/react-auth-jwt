import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthUser from "./AuthUser";

function Login() {
    const navigate = useNavigate();
    const {http} = AuthUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        http
            .post("/register", {email:email, password:password, name:name})
            .then(res => {
                navigate("/login");
            });
    };
    
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={submitForm}>Login</button>
                </div>
            </div>
        </>
    );
}

export default Login;