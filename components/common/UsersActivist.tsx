import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getUser } from '../../services/IUserActivistService';
import { userActivist } from '../../models/UserActivist';

interface UsersActivistProps {
  userId: number;
}

const UsersActivist: React.FC<UsersActivistProps> = ({ userId }) => {
  let [user, setUser] = useState<userActivist | null>(null);

  useEffect(() => {
    let fetchUser = async () => {
      let user = await getUser(userId);
      setUser(user);
    };

    fetchUser();
  }, [userId]);

  return (
    <View>
      {user && (
        <View>
          <Text>Imię: {user.name}</Text>
          <Text>E-mail: {user.email}</Text>
          <Text>Nazwa urzytkownika: {user.username}</Text>
          <Text>Telefon: {user.phone}</Text>
          <Text>Strona WWW: {user.website}</Text>
          <Text>Adres: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</Text>
          <Text>Firma: {user.company.name}</Text>
          <Text>Catch Phrase: {user.company.catchPhrase}</Text>
          <Text>BS: {user.company.bs}</Text>
        </View>
      )}
    </View>
  );
};

export default UsersActivist;
