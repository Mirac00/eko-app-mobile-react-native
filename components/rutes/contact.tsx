import React from 'react';
import { View,Text, StyleSheet } from 'react-native';
import ContactForm from '../common/ContactForm'; 

const Contact: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Tutaj możesz wysłać zapytanie do serwisu</Text>
        <ContactForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Contact;
