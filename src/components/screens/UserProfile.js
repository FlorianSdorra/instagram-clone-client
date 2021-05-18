import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App';
import {useParams} from 'react-router-dom';
import M from 'materialize-css';

const UserProfile = () => {
    const [userProfile, setProfile] = useState(null);
    const {state, dispatch} = useContext(UserContext);
    const {userid} = useParams()
    console.log(userid)
    
    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setProfile(result)
        })
    },[])
    return (
        <>
        {userProfile ? 
        <div style={{maxWidth:"900px", margin: "0 auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0",
            borderBottom:"1px solid grey"
        }}>
            <div>
                <img style={{width:"160px", height:"160px", borderRadius:"50%"}}
                src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="user"
                />
            </div>
            <div>
                <h4>{userProfile.user.name}</h4>
                <h5>{userProfile.user.email}</h5>
                <div style={{display:"flex", justifyContent:"space-between", width:"109%"}}>
                    <h6>{userProfile.posts.length} posts</h6>
                    <h6>40 followers</h6>
                    <h6>40 following</h6>
                </div>
            </div>    
        </div>
        <div className="gallery">
            {
                userProfile.posts.map(item=>{
                    return (
                        <img className="item" key={item._id} src={item.photo} alt={item.title}/>
                    )
                })
            }
        </div>
        </div>
            :
        <div class="progress">
            <div class="indeterminate"></div>
        </div>}
        </>
    )
}

export default UserProfile;