import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { LOAD_ROOMS, LOAD_USER } from '../../../GraphQL/Queries';
import RoomsUser from '../../Components/RoomsUser/RoomsUser';
import { Text, View, StyleSheet } from 'react-native';

import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { RoomsHeader } from './RoomsHeader';

const Rooms = ({ navigation }) => {
  useFonts({
    Poppins_700Bold,
  });
  const { error, loading, data } = useQuery(LOAD_ROOMS);
  useEffect(() => {}, [data]);
  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error {error.message}</Text>;
  const rooms = data.usersRooms.rooms;

  return (
    <View>
      <RoomsHeader />
      {rooms.map((room) => (
        <RoomsUser
          key={room.id}
          roomID={room.id}
          name={room.name}
          navigation={navigation}
          userID={data.user.id}
        />
      ))}
    </View>
  );
};

export default Rooms;
