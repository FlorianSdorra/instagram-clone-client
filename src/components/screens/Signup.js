import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';

const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const postData = () => {
        // eslint-disable-next-line no-useless-escape
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Please use a valid email", classes:"#c62828 red darken"})
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes:"#c62828 red darken"})
            }
            else{
                M.toast({html: data.message, classes:"#43a047 green darken-1"});
                history.push('/login')
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
                placeholder="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #2979ff blue accent-2" onClick={()=>postData()}>Sign Up</button>
                <h5>
                    Have an Account? <Link to="/login" className="myLink"> Log In</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup;