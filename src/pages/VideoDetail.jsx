import React from 'react';
import { useParams } from 'react-router-dom';

const VideoDetail = () => {
  const { videoId } = useParams();

  return (
    <div>
      <h2>VideoDetail</h2>
      <p>Video ID: {videoId}</p>
    </div>
  );
};

export default VideoDetail;
