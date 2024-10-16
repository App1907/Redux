import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
import { RootState } from '../redux/store';
import { deleteUser, User } from '../redux/actions/userActions';

interface Props {
  setSelectedUser?: (user: User) => void;
  setEditing?: (value: boolean) => void;
}

const UserList: React.FC<Props> = ({ setSelectedUser, setEditing }) => {
  const users = useSelector((state: RootState) => state.users.users);

  const dispatch = useDispatch();

const handleEdit = (user: User) => {
  setSelectedUser && setSelectedUser(user);
  setEditing && setEditing(true);
};

const handleDelete = (id: number) => {
  dispatch(deleteUser(id));
};

return (
  <FlatList
    data={users}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Button title="Edit" onPress={() => handleEdit(item)} />
        <Button title="Delete" onPress={() => handleDelete(item.id)} />
      </View>
    )}
  />
);
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 8,
  },
});

export default UserList;


