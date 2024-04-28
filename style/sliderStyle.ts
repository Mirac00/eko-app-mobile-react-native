import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  carousel: {
    width: '60%',
    alignSelf: 'center', // Adjust as per your requirement
  },
  sliderImg: {
    aspectRatio: 2.4, // Aspect ratio needs to be calculated manually based on your requirement
    marginVertical: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden', // Clip child elements that overflow
  },
});
