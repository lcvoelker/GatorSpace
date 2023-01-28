import React from "react";
import Post from "./post"
import "./postRow.css"

const PostRow = (props) => {
    const { rowdata = {}, postdata = {} } = props;
    return (
        <div>
            <p className="header">{rowdata.name}</p>
            <div className="post-row">
                <Post postdata={postdata[0]}/>
            </div>
        </div>
    )
}
export default PostRow;


