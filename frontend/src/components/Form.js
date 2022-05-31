import React, { useState, useEffect } from "react";
import API from "./API";

function Form(props) {
    const [title, setTitle] = useState(props.post.title)
    const [text, setText] = useState(props.post.text)

    useEffect(() => {
        setTitle(props.post.title)
        setText(props.post.text)
    },[props.post])

    const updatePost = () => {
        API.UpdatePost(props.post.id, {title, text})
        .then(res => props.newData(res))
        .catch(error => console.log(error))

    }

    const newPost = () => {
        API.CreatePost({title, text})
        .then(res => props.createdPost(res))
        .catch(error => console.log(error))
    }
    return (
        <div>
            {props.post ? ( 
            
            <div className="mb-3">

                <label  htmlFor = "title" className="form-label">Title</label>
                <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Please enter a title"/>

                <label  htmlFor = "text" className="form-label">Text</label>
                <textarea rows="5" className="form-control" value={text} onChange={(e) => setText(e.target.value)} placeholder="Please enter text"/>

                {props.post.id ? <button onClick={updatePost} className="btn btn-success mt-3">Update</button>:
                <button onClick={newPost} className="btn btn-success mt-3">Post!</button>}

            </div>
            
            ):null}
        </div>
    )
}


export default Form;
