import React from "react";
import { Link } from "react-router-dom";

function NotFound(){
    return (
        <>
        <h2>Page Not Found...Try to enter correct URL</h2>
        <Link className="btn btn-primary" to='/'>Home</Link>
        </>
    )
}
export default NotFound;