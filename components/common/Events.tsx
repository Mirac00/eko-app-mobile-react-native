import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import UserAlbums from './UserAlbums';
import ToDos from './ToDos';

const Events: React.FC = () => {
  const [events, setEvents] = useState<Post[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const events = await getPosts();
        setEvents(events);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <View style={styles.container}>
      {events.map(event => (
        <View key={event.id} style={styles.eventContainer}>
          <UsersActivist userId={event.userId} />
          <UserAlbums userId={event.userId} />
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventBody}>{event.body}</Text>
          <ToDos userId={event.userId} />
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
  eventContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  eventBody: {
    fontSize: 14,
    color: '#555555',
  },
});

export default Events;
