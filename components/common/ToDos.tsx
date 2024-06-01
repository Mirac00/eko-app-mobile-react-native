import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getToDos } from '../../services/todosService';
import { ToDo } from '../../models/ToDo';

interface ToDosProps {
  userId: number;
}

const ToDos: React.FC<ToDosProps> = ({ userId }) => {
  const [todos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    const fetchToDos = async () => {
      try {
        const todos = await getToDos();
        setToDos(todos.filter(todo => todo.userId === userId));
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchToDos();
  }, [userId]);

  return (
    <View style={styles.container}>
      {todos.map((todo: ToDo) => (
        <View key={todo.id} style={styles.todoContainer}>
          <Text style={styles.todoTitle}>{todo.title}</Text>
          <Text style={styles.todoStatus}>
            {todo.completed ? 'Completed' : 'Not Completed'}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  todoContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  todoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  todoStatus: {
    fontSize: 14,
    color: '#555555',
  },
});

export default ToDos;
