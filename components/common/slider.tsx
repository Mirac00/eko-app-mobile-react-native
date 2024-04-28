import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel'; // Załóżmy, że korzystasz z biblioteki Carousel
import { sliderData } from '../../images'; // Załóżmy, że masz dane dotyczące slidera
import styles from '../../styles/sliderStyle'; // Załóżmy, że masz plik ze stylami

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }: { item: string; index: number }) => {
    return <Image source={item} style={styles.sliderImg} />;
  };

  return (
    <View style={styles.sliderContainer}>
      <Carousel
        data={sliderData}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <ScrollView horizontal>
        {sliderData.map((image, index) => (
          <Image key={index} source={image} style={styles.sliderImg} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Slider;
