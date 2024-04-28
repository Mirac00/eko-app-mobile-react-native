import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import { getAlbums } from '../../services/userAlbumsService';
import { UserAlbum } from '../../models/UserAlbum';
import Photos from './Photos';
import styles from '../../style/userAlbumsStyle'; // Załóżmy, że masz plik ze stylami

const UserAlbums: React.FC<{ userId: number }> = ({ userId }) => {
  const [albums, setAlbums] = useState<UserAlbum[]>([]);
  const [show, setShow] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<UserAlbum | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      const fetchedAlbums = await getAlbums(userId);
      setAlbums(fetchedAlbums);
    };

    fetchAlbums();
  }, [userId]);

  const handleClose = () => setShow(false);
  const handleShow = (album: UserAlbum) => {
    setSelectedAlbum(album);
    setShow(true);
  };

  return (
    <View style={styles.container}>
      <Text>Albumy wydarzenia</Text>
      <View style={styles.albumButtons}>
        {albums.map(album => (
          <Button key={album.id} title={album.title} onPress={() => handleShow(album)} />
        ))}
      </View>

      <Modal visible={show} onRequestClose={handleClose}>
        <View style={styles.modalContent}>
          <Text>{selectedAlbum?.title}</Text>
          <Photos albumId={selectedAlbum?.id || null} />
          <Button title="Zamknij" onPress={handleClose} />
        </View>
      </Modal>
    </View>
  );
};

export default UserAlbums;
