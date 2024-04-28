import { ToDo } from '../models/ToDo';

export const getToDos = async (): Promise<ToDo[]> => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};
