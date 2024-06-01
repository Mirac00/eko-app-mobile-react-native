import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import Counter from './Counter';
import AddComment from './AddComponent';
import Comments from './comments'; // Import komponentu Comments
import styles from '../../style/postStyle';

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
    <View style={styles.container}> {/* Dodaj styl dla kontenera */}
      {posts.map(post => (
        <View key={post.id} style={styles.postContainer}> {/* Dodaj styl dla pojedynczego posta */}
          <UsersActivist userId={post.userId} />
          <Text style={styles.title}>Tytuł:<br/><br/>{post.title}</Text> {/* Dodaj styl dla tytułu */}
          <Text style={styles.body}>Opis:<br/><br/>{post.body}</Text> {/* Dodaj styl dla treści */}
          <Counter post={post} />
          <AddComment postId={post.id} /> {/* Przekazanie postId do komponentu AddComment */}
          <Comments postId={post.id} /> {/* Przekazanie postId do komponentu Comments */}
        </View>
      ))}
    </View>
  );
};

export default Posts;
