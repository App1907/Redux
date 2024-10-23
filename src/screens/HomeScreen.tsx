import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { setUser, clearUser } from '../redux/slices/userSlice';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const handleLogin = () => {
    dispatch(setUser({ id: '1', name: 'John Doe', email: 'john@example.com' }));
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <View>
      <Text>User: {user.name}</Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
