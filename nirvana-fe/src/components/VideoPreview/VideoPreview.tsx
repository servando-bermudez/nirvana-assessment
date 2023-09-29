import React from "react";
import { MinusCircleOutlined } from '@ant-design/icons';
import { VideoInterface } from "../../interfaces/video";
import { Link, useRevalidator } from "react-router-dom";
import { Button, Col, Image, Row } from "antd";
import { deleteVideo } from "../../requests/video.requests";
;

const VideoPreview: React.FC<VideoInterface> = (props: VideoInterface) => {
  const revalidator = useRevalidator();

  const onDelete = async (id: number) => {
    try {
      await deleteVideo(id);
      revalidator.revalidate();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div style={{ margin: '15px', maxWidth: '300px' }}>
      <div style={{ marginBottom: '15px' }}>
        <Image
          width={277}
          preview={false}
          src={`https://loremflickr.com/277/275/landscapes/?random=${props.id}`}
          alt="Video Preview" 
        />
      </div>
      <Row gutter={[20, 12]}>
        <Col>
          <Link to={`/${props.id}`}>
            {props.name}
          </Link>
        </Col>
        <Col>
          <Button 
            style={{ padding: 3 }}
            type="primary" 
            onClick={() => onDelete(props.id)}
          >
            <MinusCircleOutlined/> Delete
          </Button>
        </Col>
      </Row>      
    </div>
  );
};

export default VideoPreview;