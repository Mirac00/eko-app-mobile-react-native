import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import Counter from './Counter';
import AddComment from './AddComponent';
import Comments from './comments'; // Import komponentu Comments
import '../../style/postStyle';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getPosts();
        setPosts(posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
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
          <AddComment postId={post.id} /> {/* Przekazanie postId do komponentu AddComment */}
          <Comments postId={post.id} /> {/* Przekazanie postId do komponentu Comments */}
        </View>
      ))}
    </View>
  );
};

export default Posts;
