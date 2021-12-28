import React, { useState } from 'react';

function Comment({ comment, thumbs, deleteComment }) {

    const [upvotes, setUpvotes] = useState(comment.upvotes);
    const [downvotes, setDownvotes] = useState(comment.downvotes);

    function handleUpClick() {
        setUpvotes(() => ++ comment.upvotes);
    }

    function handleDownClick() {
        setDownvotes(() => ++ comment.downvotes);
    }

    function handleDeleteComment() {
        deleteComment(comment.id);
    }

    return (
        <div key={comment.id}>
            <h2>{comment.user}</h2>
            <p>{comment.comment}</p>
            <button onClick={handleUpClick}>{upvotes} {thumbs[0]}</button>
            <button onClick={handleDownClick}>{downvotes} {thumbs[1]}</button>
            <button onClick={handleDeleteComment}>Remove Comment</button>
        </div>
    )
}

export default Comment;