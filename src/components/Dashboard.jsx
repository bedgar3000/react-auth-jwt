import { useEffect, useState } from "react";
import AuthUser from "./AuthUser";

function Dashboard() {
    const {http} = AuthUser();
    const [userdetail, setUserdetail] = useState("");

    useEffect(() => {
        const fetchUserDetail = () => {
            http
                .post("/me")
                .then(res => {
                    setUserdetail(res.data);
                })
                .catch(err => {});
        };

        fetchUserDetail();
    }, []);

    function renderElement() {
        if (userdetail) {
            return <div className="row">
                        <div className="col">
                            <p>
                                <b>Name: </b> {userdetail.name}
                            </p>
                            <p>
                                <b>Email: </b> {userdetail.email}
                            </p>
                        </div>
                    </div>
        } else {
            return <div>Loading...</div>;
        }
    }

    return (
        <>
            {renderElement()}
        </>
    );
}

export default Dashboard;