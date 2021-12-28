import React, { useState } from 'react'
import Comment from './Comment';

function CommentList({ video, thumbs }) {
    const [comments, setComments] = useState(video.comments);

    function deleteComment(commentId) {
        setComments(comments.filter((comment) => comment.id !== commentId))
    }

    function handleChange(e) {
        if (e.target.value == "" || e.target.value.length === 0) {
            setComments(video.comments)
        } else {
            setComments(comments.filter((comment) => comment.user.toLowerCase().includes(e.target.value.toLowerCase())));
        }
    }

    return (
        <div>
            <h1>{video.comments.length} Comments</h1>
            <input type="text" placeholder="search comments here" onChange={handleChange}></input>
            {comments.map((comment) => <Comment key={comment.id} thumbs={thumbs} comment={comment} deleteComment={deleteComment} />)}
        </div>
    )
}

export default CommentList;