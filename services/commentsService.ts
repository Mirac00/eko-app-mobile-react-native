import axios from 'axios';
import { Comment } from '../models/Comment';

export const getComments = async (): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};

export const addComment = async (comment: Comment): Promise<void> => {
  try {
    console.log('Adding comment:', comment);
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', comment);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
};

export const updateComment = async (id: number, comment: Comment): Promise<void> => {
  try {
    console.log('Updating comment:', comment);
    const response = await axios.put(`https://jsonplaceholder.typicode.com/comments/${id}`, comment);
    console.log('Response:', response);
  } catch (error) {
    console.error('Error updating comment:', error);
    throw error;
  }
};

export const getHighestCommentId = async (): Promise<number> => {
  try {
    const comments = await getComments();
    const highestId = Math.max(...comments.map(comment => comment.id));
    return highestId;
  } catch (error) {
    console.error('Error fetching highest comment id:', error);
    throw error;
  }
};
