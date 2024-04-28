import axios from 'axios';

export const getAlbums = async (userId: number) => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching albums:', error);
    throw error;
  }
};
