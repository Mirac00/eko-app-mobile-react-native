import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    padding: 0,
    paddingHorizontal: 20,
    backgroundColor: 'transparent', // You can't use images in React Native stylesheet like in web, replace with transparent
  },
  header: {
    marginBottom: 27, // Adjust as per your requirement
  },
});
