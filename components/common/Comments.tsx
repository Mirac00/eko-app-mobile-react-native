import React, { useEffect, useState } from 'react';
import { getComments } from '../../services/commentsService';
import { Comment } from '../../models/Comment';
import Counter from './Counter';
import { View } from 'react-native';

interface CommentsProps {
  postId: number;
}

const Comments: React.FC<CommentsProps> = ({ postId }) => {
  let [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    let fetchComments = async () => {
      let comments = await getComments();
      setComments(comments.filter(comment => comment.postId === postId));
    };

    fetchComments();
  }, [postId]);

  return (
    <View>
      {comments.map((comment: Comment) => (
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
