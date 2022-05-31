import React from "react";

function Post(props) {
    const editPost = (post) => {
        props.editPost(post)
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
                            <button className="btn btn-danger">Delete</button>
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
