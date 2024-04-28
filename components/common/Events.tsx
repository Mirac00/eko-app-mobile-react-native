import React, { useEffect, useState } from 'react';
import { getPosts } from '../../services/postsService';
import { Post } from '../../models/Post';
import UsersActivist from './UsersActivist';
import UserAlbums from './UserAlbums';
import ToDos from './ToDos';
import { View, Text } from 'react-native';

const Events: React.FC = () => {
  let [events, setEvents] = useState<Post[]>([]);

  useEffect(() => {
    let fetchEvents = async () => {
      let events = await getPosts();
      setEvents(events);
    };

    fetchEvents();
  }, []);

  return (
    <View>
      {events.map(event => (
        <View key={event.id}>
          <UsersActivist userId={event.userId} />
          <UserAlbums userId={event.userId} />
          <Text>{event.title}</Text>
          <Text>{event.body}</Text>
          <ToDos userId={event.userId} />
        </View>
      ))}
    </View>
  );
};

export default Events;
