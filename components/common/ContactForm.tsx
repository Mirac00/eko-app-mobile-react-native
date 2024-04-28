import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    // Logika wysyłania wiadomości
    console.log({ email, name, message });
  };

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} placeholder="Email" />
      <TextInput value={name} onChangeText={setName} placeholder="Imię i nazwisko" />
      <TextInput value={message} onChangeText={setMessage} placeholder="Treść" />
      <Button title="Wyślij" onPress={handleSubmit} />
    </View>
  );
};

export default ContactForm;
