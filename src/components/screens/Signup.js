import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';
import secret from '../../keys';
const {CLOUD_NAME, UPLOAD_PRESET} = secret;

const Signup = () => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState("");
    const [url, setUrl] = useState(undefined);
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])


    const uploadProfilePicture = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", UPLOAD_PRESET);
        data.append("cloud_name", CLOUD_NAME);

        fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,{
        method:"post",
        body:data
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: "your file is not processible", classes:"#c62828 red darken"})
            }
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }

    const uploadFields = () =>{
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
                email,
                pic:url
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

    const postData = () => {
        if(image){
            uploadProfilePicture();
        }else{
            uploadFields()
        }
        
       
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
                <div className="file-field input-field">
                <div className="btn #2979ff blue accent-2">
                    <span>Upload Profile Picture</span>
                    <input
                    type="file"
                    onChange={(e)=>setImage(e.target.files[0])}
                    />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/> 
                </div>
                </div>
                <button className="btn waves-effect waves-light #2979ff blue accent-2" onClick={()=>postData()}>Sign Up</button>
                <h5>
                    Have an Account? <Link to="/login" className="myLink"> Log In</Link>
                </h5>
            </div>
        </div>
    )
}

export default Signup;