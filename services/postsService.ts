import axios from 'axios';
import { Post } from '../models/Post';

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

export const updatePost = async (post: Post): Promise<void> => {
  try {
    console.log('Updating post:', post);
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${post.id}`, post);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error updating post:', error);
    throw error;
  }
};
