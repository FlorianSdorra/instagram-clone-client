import React, {useState, useEffect, useContext} from 'react';
import {UserContext} from '../../App'

const Home = () => {
    const [data, setData] = useState([]);
    const {state, dispatch} = useContext(UserContext)

    console.log(state)

    const mainCall = ()=>{
        fetch('/allposts',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setData(result.posts)
        })
    }

    useEffect(mainCall,[])

    const likePost = (id) => {
        fetch('/like',{
                method:"put",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    postId:id
                })
        }).then(res=>res.json())
        .then(result=>{
            const newData = data.map(item=>{
                result.postedBy = item.postedBy
                if(item._id===result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const unlikePost = (id) => {
        fetch('/unlike',{
                method:"put",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    postId:id
                })
        }).then(res=>res.json())
        .then(result=>{
            const newData = data.map(item=>{
                result.postedBy = item.postedBy
                if(item._id===result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
        })
        .catch(err=>{
            console.log(err)
        })
    }

    const list = data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src={item.photo} alt="cardimage"/>
                            </div>
                            <div className="card-content">
                                <i className="material-icons ">favorite_border</i>
                                {item.likes.includes(state._id)?<i className="material-icons" onClick={()=>unlikePost(item._id)}>thumb_down</i>:<i className="material-icons" onClick={()=>likePost(item._id)}>thumb_up</i>}
                                <h6>{item.likes.length} likes</h6>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment"/>
                            </div>
                            </div>
                    )
                            
})

    return (
        <div className="home">
                {list}
        </div>
    )
}

export default Home;