import { Link } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {

  const Check1=()=>{
    const user=document.getElementById("user").value;
    const pass=document.getElementById("pass").value;
    if(user&&pass.length>5)
    {
        
        axios.get("http://localhost:3000/User")
        .then((res)=>
            {
                   const data=res.data;
                   console.log(data);
                   if(data.find(obj => obj.email === user))
                   {
                      let index=data.findIndex(obj => obj.email === user);
                      
                      if(data[index].password === pass)
                      {
                       
                        window.location.href='/home';
                      }
                      else{
                        alert("Invalid password");
                      }
                   }
                   else
                   {
                    alert("User not found");
                   }
                
            })
            .catch((error)=>
            {
                console.log(error);
            })
        
    }
    else{
        if(!user)
        {
            alert("Enter UserName");
        }
        else{
            alert("Password must be at least 6 characters")
        }
    }
}
  return (
       <div className="container">
      <form className="form">
        <h2>Login</h2>
        <label>Username:</label>
        <input type="text" id="user" required/>
        <label>Password:</label>
        <input type="password" id='pass' required/>
        <p>Don't have an account?<a href="/signup">SignUp</a></p>
       <button type="submit" onClick={Check1}>Login</button>
      </form>
    </div>



    
  );
}

export default App;
