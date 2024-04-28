import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Navbar from './navbar';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#f5f5f5' }}>
        <Navbar /> 
      </View>
      <ScrollView style={{ flex: 1 }}>
        {children}
      </ScrollView>
      <View style={{ backgroundColor: '#f5f5f5', padding: 10 }}>
        <Text>Stopka</Text>
      </View>
    </View>
  );
}

export default Layout;
