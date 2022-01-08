import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Rooms from './src/Views/Rooms/Rooms';
import Chat from './src/Views/Chat/Chat';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Rooms' component={Rooms} />
          <Stack.Screen name='chat' component={Chat} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
