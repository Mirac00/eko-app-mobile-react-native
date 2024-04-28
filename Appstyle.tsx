import { StyleSheet } from 'react-native';

export const Appstyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '40vmin', // Nie ma vmin w React Native, można użyć proporcjonalnej jednostki np. '40%'
    pointerEvents: 'none',
  },
  header: {
    backgroundColor: '#282c34',
    minHeight: '100%', // Możesz użyć proporcjonalnej jednostki np. '100%'
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24, // Możesz użyć wartości w pikselach
    color: 'white',
  },
  link: {
    color: '#61dafb',
  },
});
