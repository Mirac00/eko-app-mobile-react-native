import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      {comments.map(comment => (
        <View key={comment.id} style={styles.commentContainer}>
          <Text style={styles.commentName}>{comment.name}</Text>
          <Text style={styles.commentBody}>{comment.body}</Text>
          <Counter comment={comment} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  commentContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  commentName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  commentBody: {
    fontSize: 14,
    color: '#555555',
  },
});

export default Comments;
