import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0', // Kolor tła kontenera
  },
  postContainer: {
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#ffffff', // Kolor tła pojedynczego posta
    borderRadius: 8,
    elevation: 2, // Cień
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    color: '#555555',
  },
});
