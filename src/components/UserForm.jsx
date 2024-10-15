import React, { useState, useEffect } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../redux/actions/userActions';

const UserForm = ({ selectedUser, isEditing, setEditing }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (isEditing && selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    }
  }, [isEditing, selectedUser]);

  const handleSubmit = () => {
    const user = {
      id: isEditing && selectedUser ? selectedUser.id : Date.now(),
      name,
      email,
    };

    if (isEditing) {
      dispatch(updateUser(user));
      setEditing(false);
    } else {
      dispatch(addUser(user));
    }

    setName('');
    setEmail('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <Button title={isEditing ? 'Update User' : 'Add User'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
  },
});

export default UserForm;
