import axios from 'axios';
import { userActivist } from '../models/UserActivist';

export const getUser = async (id: number): Promise<userActivist> => {
  try {
    const response = await axios.get<userActivist>(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
