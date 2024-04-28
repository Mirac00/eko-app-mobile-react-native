import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getToDos } from '../../services/todosService';
import { ToDo } from '../../models/ToDo';

interface ToDosProps {
  userId: number;
}

const ToDos: React.FC<ToDosProps> = ({ userId }) => {
  let [todos, setToDos] = useState<ToDo[]>([]);

  useEffect(() => {
    let fetchToDos = async () => {
      let todos = await getToDos();
      setToDos(todos.filter(todo => todo.userId === userId));
    };

    fetchToDos();
  }, [userId]);

  return (
    <View>
      {todos.map((todo: ToDo) => (
        <View key={todo.id}>
          <Text>{todo.title}</Text>
          <Text>{todo.completed ? 'Completed' : 'Not Completed'}</Text>
        </View>
      ))}
    </View>
  );
};

export default ToDos;
