import React, { useState } from 'react';
import { addComment, getHighestCommentId } from '../../services/commentsService';
import { Comment } from '../../models/Comment';
import { Button, TextInput, View } from 'react-native';

interface AddCommentProps {
  postId: number;
}

const AddComment: React.FC<AddCommentProps> = ({ postId }) => {
  let [commentBody, setCommentBody] = useState('');
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');

  let handleAddComment = async () => {
    let highestId = await getHighestCommentId();
    let newComment: Comment = {
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
    <View>
      <TextInput value={name} onChangeText={(text) => setName(text)} placeholder="Imię" />
      <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="E-mail" />
      <TextInput value={commentBody} onChangeText={(text) => setCommentBody(text)} placeholder="Komentarz" />
      <Button title="Dodaj komentarz" onPress={handleAddComment} />
    </View>
  );
};

export default AddComment;
