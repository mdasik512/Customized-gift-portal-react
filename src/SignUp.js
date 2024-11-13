//import './App.css';
import { Link } from "react-router-dom";
import axios from "axios";
function Signup() {
  const Check=()=>{
        
    const user=document.getElementById("user").value;
    const pass=document.getElementById("pass").value;
    const con=document.getElementById("con").value;
    axios.get('http://localhost:3000/User')
   .then((res)=>
    {
        const data=res.data;
        const userData=data.find(obj => obj.email === user)
        if(!userData&&pass.length>5)
        {
            
            if(pass===con)
            {
                axios.post('http://localhost:3000/User',{
                    email:user,
                    password:pass
                })
                .then(()=>{
                  window.location.href='/';
                })
                .catch(err=> console.log(err))
           }
           else{
            alert("Password Mismatch");
           }
        }
        else
        {
            if(pass!==con)
            {
                alert("Password Mismatch");
            }
            else if(!user)
            {
                alert("Enter User Name");
            }
            else if(pass.length<6)
            {

              alert("Password must be at least 6");
            }
            else{
              alert("User already exists")
            }
        }
    })
   .catch((err)=>console.log(err))
}
    return(
        <div className="container">
        <form className="form">
          <h2>SignUp</h2>
          <label>Username:</label>
          <input type="text" id="user"/>
          <label>Create Password:</label>
          <input type="password" id="pass"/>
          <label>Confirm Password:</label>
          <input type="password" id="con"/>
          <p>Already have an account?<a href="/">Login</a></p>
          <button type="submit" onClick={Check}>SignUp</button>
        </form>
      </div>
  
    );
}
export default Signup;