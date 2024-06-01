import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { getAlbums } from '../../services/userAlbumsService';
import { UserAlbum } from '../../models/UserAlbum';
import Photos from './Photos';

const UserAlbums: React.FC<{ userId: number }> = ({ userId }) => {
  const [albums, setAlbums] = useState<UserAlbum[]>([]);
  const [show, setShow] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState<UserAlbum | null>(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const fetchedAlbums = await getAlbums(userId);
        setAlbums(fetchedAlbums);
      } catch (error) {
        console.error('Error fetching albums:', error);
      }
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
      <Text style={styles.heading}>Albumy wydarzenia</Text>
      <View style={styles.albumButtons}>
        {albums.map(album => (
          <Button key={album.id} title={album.title} onPress={() => handleShow(album)} />
        ))}
      </View>

      <Modal visible={show} onRequestClose={handleClose}>
        <View style={styles.modalContent}>
          <Text style={styles.albumTitle}>{selectedAlbum?.title}</Text>
          <Photos albumId={selectedAlbum?.id || null} />
          <Button title="Zamknij" onPress={handleClose} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  albumButtons: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  modalContent: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 8,
  },
  albumTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

export default UserAlbums;
