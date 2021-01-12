import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';


const Login = () => {
        const history = useHistory();
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
    
        const postData = () => {
            // eslint-disable-next-line no-useless-escape
            if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                M.toast({html: "Please use a valid email", classes:"#c62828 red darken"})
                return
            }
            fetch("/signin",{
                method:"post",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    password,
                    email
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.error){
                    M.toast({html: data.error, classes:"#c62828 red darken"})
                }
                else{
                    M.toast({html: "Logged In successfully", classes:"#43a047 green darken-1"});
                    history.push('/')
                }
            }).catch(err=>{
                console.log(err)
            })   
        }

    return (
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2 className="mybrand-logo">Instagram</h2>
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #2979ff blue accent-2" onClick={()=>postData()}>Log In</button>
                <h5>
                    Don't have an Account? <Link to="/signup" className="myLink"> Sign Up</Link>
                </h5>
            </div>
        </div>
    )
}

export default Login;