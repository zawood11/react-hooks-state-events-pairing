import React, { useState } from "react";

function Video({ video, thumbs, onHideComments, showComments }) {
    const [upvotes, setUpvotes] = useState(video.upvotes);
    const [downvotes, setDownvotes] = useState(video.downvotes);

    function handleUpClick(e) {
        setUpvotes(() => ++ video.upvotes);
    }
    
    function handleDownClick() {
        setDownvotes(() => ++ video.downvotes);
    }

    function handleHideComments() {
        onHideComments(showComments);
    }

    return (
        <div>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Upload {video.createdAt}</p>
            <div>
                <button onClick={handleUpClick}>{video.upvotes} {thumbs[0]}</button>
                <button onClick={handleDownClick}>{video.downvotes} {thumbs[1]}</button>
            </div>
            <div>
                <button onClick={handleHideComments}>{showComments ? "Hide Comments" : "Show Comments"}</button>
            </div>
        </div>
    )
}

export default Video;