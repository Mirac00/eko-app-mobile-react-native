import axios from 'axios';
import { Photo } from '../models/Photo';

export const getPhotos = async (albumId: number): Promise<Photo[]> => {
  try {
    const response = await axios.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
