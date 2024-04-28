import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getComments } from '../../services/commentsService';
import { Comment } from '../../models/Comment';
import Counter from './Counter';

const Comments: React.FC<{ postId: number }> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const comments = await getComments();
        setComments(comments.filter(comment => comment.postId === postId));
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchComments();
  }, [postId]);

  return (
    <View>
      {comments.map(comment => (
        <View key={comment.id}>
          <Text>{comment.name}</Text>
          <Text>{comment.body}</Text>
          <Counter comment={comment} />
        </View>
      ))}
    </View>
  );
};

export default Comments;
