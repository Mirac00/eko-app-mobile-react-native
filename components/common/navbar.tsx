import React from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';

function Navbar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
      <Link to="/">
        <Text>Eko Project</Text>
      </Link>
      <Link to="/activeEvents">
        <Text>Strona główna</Text>
      </Link>
      <Link to="/activeEvents">
        <Text>Aktywne Wydarzenia</Text>
      </Link>
      <Link to="/contact">
        <Text>Kontakt</Text>
      </Link>
    </View>
  );
}

export default Navbar;
