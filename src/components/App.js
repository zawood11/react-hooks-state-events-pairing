import video from "../data/video.js";
import Video from './Video';
import CommentList from './CommentList';
import React, { useState } from 'react';

function App() {
  const [showComments, setShowComments] = useState(true);

  const thumbs = ["👍", "👎"];
  
  function onHideComments() {
    setShowComments(!showComments);
    console.log(showComments);
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Video video={video} thumbs={thumbs} showComments={showComments} onHideComments={onHideComments}/>
      <hr />
      {showComments ? <CommentList video={video} thumbs={thumbs} /> : null}
    </div>
  );
}

export default App;
