import React, {useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App'

const Profile = () => {
    const {state, dispatch} = useContext(UserContext)
    console.log(state)
    const [mypics, setPics] = useState([]);
    useEffect(()=>{
        fetch('/myposts',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem('jwt')
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.myposts)
        })
    }, [])
    return (
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
                    <h4>{state?state.name:"loading"}</h4>
                    <h5>{state?state.email:"loading"}</h5>
                    <div style={{display:"flex", justifyContent:"space-between", width:"109%"}}>
                        <h6>{mypics.length} posts</h6>
                        <h6>{state.followers.length}followers</h6>
                        <h6>{state.following.length} following</h6>
                    </div>
                </div>    
            </div>
            <div className="gallery">
                {
                    mypics.map(item=>{
                        return (
                            <img className="item" key={item._id} src={item.photo} alt={item.title}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Profile;