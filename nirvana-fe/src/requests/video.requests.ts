import axios from "axios";

const baseUrl = `${process.env.REACT_APP_API_HOST}/videos`;

export const getVideo = async (id: number) => {
  const response = await axios.get(`${baseUrl}/${id}`);

  if (response.status !== 200) {
    throw new Error('Error fetching video');
  }

  return response.data;
}

export const getAllVideos = async () => {
  const response = await axios.get(baseUrl);

  if (response.status !== 200) {
    throw new Error('Error fetching videos');
  }

  return response.data;
};

export const createVideo = async (video: { name: string; url: string}) => {
  const response = await axios.post(`${baseUrl}/create`, video);

  if (response.status !== 201) {
    throw new Error('Error creating video');
  }

  return response.data;
}

export const updateVideo = async (video: { id: string; name?: string; url?: string}) => {
  const response = await axios.patch(`${baseUrl}/${video.id}`, video);

  if (response.status !== 200) {
    throw new Error('Error updating video');
  }

  return response.data;
};

export const deleteVideo = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/${id}`);

  if (response.status !== 200) {
    throw new Error('Error deleting video');
  }

  return response.data;
};