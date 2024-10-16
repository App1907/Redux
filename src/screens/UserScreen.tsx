import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { fetchUsers } from '../redux/actions/userActions';

const UserScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <UserForm />
      <UserList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default UserScreen;

