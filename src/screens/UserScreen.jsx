import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UserScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setEditing] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <UserForm selectedUser={selectedUser} isEditing={isEditing} setEditing={setEditing} />
      <UserList setSelectedUser={setSelectedUser} setEditing={setEditing} />
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default UserScreen;
