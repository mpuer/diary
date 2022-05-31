import React from "react";
import API from "./API";

function Post(props) {
    const editPost = (post) => {
        props.editPost(post)
    }

    const deletePost = (post) => {
        API.DeletePost(post.id)
        .then(() => props.deletePost(post))

    }
    return (
        <div>
            {props.post && props.post.map(each => {
                return (
                    <div key={each.id}>
                        <h2>{each.title}</h2>
                        <p>{each.text}</p>
                    
                    <div className="row">
                        <div className="col-md-1">
                            <button className="btn btn-primary"
                            onClick={() => editPost(each)}>Update</button>
                        </div>

                        <div className="col">
                            <button className="btn btn-danger"
                            onClick={() => deletePost(each)}>Delete</button>
                        </div>

                    </div>
                    <hr/>

                    </div>
                )
            })}
        </div>
    )
}

export default Post;
