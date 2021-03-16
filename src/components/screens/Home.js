import React, {useState, useEffect} from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('/allposts',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result.posts);
            setData(result.posts)
        })
    },[])

    const list = data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                            <h5>{item.postedBy.name}</h5>
                            <div className="card-image">
                                <img src={item.photo} alt="cardimage"/>
                            </div>
                            <div className="card-content">
                                <i className="material-icons ">favorite_border</i>
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