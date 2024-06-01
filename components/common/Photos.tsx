import React, { useEffect, useState } from 'react';
import { View, Image, ScrollView, StyleSheet } from 'react-native';
import { getPhotos } from '../../services/photosService';
import { Photo } from '../../models/Photo';

const Photos: React.FC<{ albumId: number | null }> = ({ albumId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        if (albumId !== null) {
          const fetchedPhotos = await getPhotos(albumId);
          setPhotos(fetchedPhotos);
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchPhotos();
  }, [albumId]);

  return (
    <ScrollView horizontal>
      {photos.map((photo: Photo) => (
        <Image
          key={photo.id}
          source={{ uri: photo.url }}
          style={styles.photoImage}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  photoImage: {
    width: 200,
    height: 150,
    marginHorizontal: 8,
    borderRadius: 8,
  },
});

export default Photos;
