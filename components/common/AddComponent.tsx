import React, { useState } from 'react';
import { addComment, getHighestCommentId } from '../../services/commentsService';
import { Comment } from '../../models/Comment';
import { Button, TextInput, View, StyleSheet } from 'react-native';

interface AddCommentProps {
  postId: number;
}

const AddComment: React.FC<AddCommentProps> = ({ postId }) => {
  const [commentBody, setCommentBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddComment = async () => {
    const highestId = await getHighestCommentId();
    const newComment: Comment = {
      postId,
      id: highestId + 1,
      name,
      email,
      body: commentBody,
      likes: 0,
      dislikes: 0,
    };

    await addComment(newComment);
    setCommentBody('');
    setName('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Imię"
        style={styles.input}
      />
      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="E-mail"
        style={styles.input}
      />
      <TextInput
        value={commentBody}
        onChangeText={(text) => setCommentBody(text)}
        placeholder="Komentarz"
        style={styles.input}
        multiline
      />
      <Button title="Dodaj komentarz" onPress={handleAddComment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
});

export default AddComment;
