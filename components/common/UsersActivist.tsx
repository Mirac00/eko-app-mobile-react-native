import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { getUser } from '../../services/IUserActivistService';
import { userActivist } from '../../models/UserActivist';

interface UsersActivistProps {
  userId: number;
}

const UsersActivist: React.FC<UsersActivistProps> = ({ userId }) => {
  const [user, setUser] = useState<userActivist | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUser(userId);
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.userContainer}>
          <Text style={styles.userInfo}>Imię: {user.name}</Text>
          <Text style={styles.userInfo}>E-mail: {user.email}</Text>
          <Text style={styles.userInfo}>Nazwa użytkownika: {user.username}</Text>
          <Text style={styles.userInfo}>Telefon: {user.phone}</Text>
          <Text style={styles.userInfo}>Strona WWW: {user.website}</Text>
          <Text style={styles.userInfo}>Adres: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Text>
          <Text style={styles.userInfo}>Firma: {user.company.name}</Text>
          <Text style={styles.userInfo}>Catch Phrase: {user.company.catchPhrase}</Text>
          <Text style={styles.userInfo}>BS: {user.company.bs}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  userContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  userInfo: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 8,
  },
});

export default UsersActivist;
