import React from "react";
import "./post.css";

const Post = (props) => {
    const { postdata = {} } = props;
    return (
        <div className="post">
            <p className="title">{postdata.title}</p>
            <p className="desc">{postdata.desc}</p>
        </div>
    )
}

export default Post
