import React from "react";
import Post from "./post"
import "./postRow.css"

const PostRow = (props) => {
    const { rowdata = {}, postdata = [] } = props;

    const postItemsJSX = postdata.map((item, index) => {
        return(
            <Post item={item} key={item.title} />
        )
    })
    return (
        <div>
            <p className="header">{rowdata.name}</p>
            <div className="post-row">
                {postItemsJSX}
            </div>
        </div>
    )
}
export default PostRow;


