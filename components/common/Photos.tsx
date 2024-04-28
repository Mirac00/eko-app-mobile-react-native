import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { getPhotos } from '../../services/photosService';
import { Photo } from '../../models/Photo';
import styles from '../../style/photoStyle'; // Załóżmy, że masz plik ze stylami

interface PhotosProps {
  albumId: number | null;
}

const Photos: React.FC<PhotosProps> = ({ albumId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    if (albumId !== null) {
      const fetchPhotos = async () => {
        const photosFromService = await getPhotos(albumId);
        setPhotos(photosFromService);
      };

      fetchPhotos();
    }
  }, [albumId]);

  return (
    <View style={styles.photosModalBody}>
      {photos.map((photo) => (
        <Image key={photo.id} source={{ uri: photo.url }} style={styles.photoImage} />
      ))}
    </View>
  );
};

export default Photos;
