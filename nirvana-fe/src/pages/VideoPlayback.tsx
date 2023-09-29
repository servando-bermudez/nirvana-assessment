import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { VideoInterface } from "../interfaces/video";
import { Typography } from "antd";
import { getVideo } from "../requests/video.requests";

const { Title } = Typography;

export const videoLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id = null } = params as { id: string };

  if (!id) return { video: null };

  try {
    const video = await getVideo(parseInt(id));
    return { video };
  } catch (error) {
    return { video: null }
  }
};

const VideoPlayback: React.FC = () => {
  const { video } = useLoaderData() as { video: VideoInterface | null };

  if (!video) return (
    <div style={{ height: '100%', width: '100%' }}>
      <Title level={3}>Video not found</Title>
    </div>
  );

  return (
    <>
    <div style={{ height: '100%', width: '100%'}}>
    <Title level={3}>{video.name}</Title>
      <iframe
      style={{ height: '100%', width: '100%', position: 'relative' }}
        src={video.url.replace('watch?v=', 'embed/')}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      >
      </iframe>
    </div>
    </>
  );
}

export default VideoPlayback;