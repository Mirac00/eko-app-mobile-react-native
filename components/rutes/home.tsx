import React from 'react';
import { View, StyleSheet } from 'react-native';
import Posts from '../common/Posts'; // Załóżmy, że masz taki komponent

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Posts />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
});

export default Home;
