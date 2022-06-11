import { useState } from "react";
import AuthUser from "./AuthUser";

function Login() {
    const {http, setToken} = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitForm = () => {
        http
            .post("/login", {email:email, password:password})
            .then(res => {
                setToken(res.data.user, res.data.access_token);
            });
    };
    
    return (
        <>
            <div className="row justify-content-center">
                <div className="col-lg-6">
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