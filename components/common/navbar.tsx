import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

function Navbar() {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 10 }}>
      <TouchableOpacity>
        <Text>Eko Project</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Strona główna</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Aktywne Wydarzenia</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Kontakt</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Navbar;
