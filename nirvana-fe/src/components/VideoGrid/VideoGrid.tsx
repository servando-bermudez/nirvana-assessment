import React from "react";

import { Col, Row, Typography } from "antd";
import { VideoInterface } from "../../interfaces/video";
import VideoPreview from "../VideoPreview/VideoPreview";
import { useLoaderData } from "react-router-dom";
import { getAllVideos } from "../../requests/video.requests";

const { Title } = Typography;

export const videosLoader = async () => {
  const videos = await getAllVideos();
  return { videos };
};

const VideoGrid: React.FC = () => {
 const { videos } = useLoaderData() as { videos: VideoInterface[] };

 if (videos.length === 0) return (
    <div style={{ height: '100%', width: '100%' }}>
      <Title level={3}>There are no videos</Title>
    </div>
 );
  
  return (
    <Row gutter={[16, 16]}>
      {
        videos.map((video: VideoInterface) => (
          <Col key={video.id} >
            <VideoPreview { ...video } />
          </Col>
        ))
      }
    </Row>
  )
};

export default VideoGrid;