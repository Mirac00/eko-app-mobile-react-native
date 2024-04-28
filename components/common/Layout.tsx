import React from 'react';
import { View, Text } from 'react-native';
import Navbar from './navbar';
import Slider from './slider';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#f5f5f5' }}>
        <Navbar /> 
      </View>
      <Slider />
      <View style={{ flex: 1 }}>
        {children}
      </View>
      <View style={{ backgroundColor: '#f5f5f5', padding: 10 }}>
        <Text>Stopka</Text>
      </View>
    </View>
  );
}

export default Layout;
