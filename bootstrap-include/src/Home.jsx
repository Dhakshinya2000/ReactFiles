import React from "react";
import { useState, useEffect, createContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import Login from "./Login";


export const MyContext = createContext();

 function Home(){
    const [posts,setPosts] = useState(null);

    const data = "dataForChild";
    const navigate = useNavigate();
    useEffect(()=>{
       const controller = new AbortController();
       const signal = controller.signal;
        setTimeout(()=>{
            fetch('http://localhost:3000/posts',{signal})
            .then((response)=>{return response.json()})
            .then((data)=>setPosts(data))
            .catch((error)=>{console.log(error)})

        },2000);
       

        //cleanup
        return ()=>{
            console.log('cleaningup','unmounted');
            controller.abort();
        }
    },[])

    return(
        
        <div className="container">
            {/* <Link to="/login">Login</Link> */}
        <MyContext.Provider value={data}>
        {/* <Login /> */}
        </MyContext.Provider>
        

            <div className="row justify-content-center m-3">
                {posts && posts.map((post)=>{
                    
                    return    <div key={post.id} className="card m-3" style={{width:'18rem'}} onClick={()=>{navigate('/post/'+post.id)}}>
                           <div className="card-body"> 
                           <h5 className="card-title">{post.title}</h5>
                           {/* <p className="card-text">{post.body}</p> */}
                           </div>
                        </div>
                    
                })}
            </div>
            
 
</div>
       
    )
}

export default Home;