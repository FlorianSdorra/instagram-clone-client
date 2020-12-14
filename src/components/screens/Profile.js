import React from 'react'

const Profile = () => {
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
                    <h4>User Name</h4>
                    <div style={{display:"flex", justifyContent:"space-between", width:"109%"}}>
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>    
            </div>
            <div className="gallery">
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
                <img className="item" src="https://images.unsplash.com/photo-1549548731-a47a58b650f5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfDJ8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="img post"/>
            </div>
        </div>
    )
}

export default Profile;