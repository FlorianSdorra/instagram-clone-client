import React from 'react';

const CreatePost = () =>{
    return(
        <div className="card input-field"
        style={{
            margin:"122px auto",
            maxWidth: "420px",
            padding:"30px",
            textAlign:"center"
        }}>
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div className="file-field input-field">
                <div className="btn #2979ff blue accent-2">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/> 
                </div>
                </div>
                <button className="btn waves-effect waves-light #2979ff blue accent-2">Submit Post</button>   
        </div>
    )
}

export default CreatePost