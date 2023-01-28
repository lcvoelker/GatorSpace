import React from "react";
import "./post.css";

const Post = (props) => {
    const { item = {} } = props;
    return (
        <div className="post">
            <p className="title">{item.title}</p>
            <p className="desc">{item.desc}</p>
        </div>
    )
}

export default Post
