import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import Comments from './Comments';
import Counter from './Counter';
import AddComment from './AddComponent';

const Posts: React.FC = () => {
  let [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    let fetchPosts = async () => {
      let posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <View>
      {posts.map(post => (
        <View key={post.id}>
          <UsersActivist userId={post.userId} />
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
          <Counter post={post} />
          <AddComment postId={0} />
          <Comments postId={post.id} />
        </View>
      ))}
    </View>
  );
};

export default Posts;
