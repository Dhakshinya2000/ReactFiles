import React from "react";
import { useState } from "react";
import Counter from "./Counter";

function Login(){
    const [pwd1,setPwd1] = useState("");
    const [pwd2,setPwd2] = useState("");
    const [passwordSame,setPasswordSame]=useState(true);
    function handlePassword1(e){
        setPwd1(e.target.value);
    }
    function handlePassword2(e){
        setPwd2(e.target.value);
        if(pwd1 === e.target.value){
            console.log("Same password");
            setPasswordSame(true);
        }
        else{
            console.log("Password are not same");
            setPasswordSame(false);
        }
    }
    
    return(
        <>

        <Counter />

        <form className="my-5" style={{width:"50%",margin:"auto"}}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={pwd1} onChange={handlePassword1} className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Conform Password</label>
    <input type="password" value={pwd2}  onChange={handlePassword2}
    className="form-control" id="exampleInputPassword1"/>
    
    {!passwordSame && <p>Password Don't match</p>}
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" 
    id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I Agree</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </>
    )
}

export default Login