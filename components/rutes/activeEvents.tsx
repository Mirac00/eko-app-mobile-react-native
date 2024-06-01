import React from 'react';
import { View, StyleSheet } from 'react-native';
import Events from '../common/Events'; 

const ActiveEvents: React.FC = () => {
  return (
    <View style={styles.container}>
      <Events />
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

export default ActiveEvents;
