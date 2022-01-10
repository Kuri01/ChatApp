import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ApolloProvider } from '@apollo/client';
import { client } from './client';
import Rooms from './src/screens/Rooms/Rooms';
import Chat from './src/screens/Chat/Chat';
import { StyleSheet } from 'react-native-web';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            component={Rooms}
            name='Rooms'
          />
          <Stack.Screen
            name='Chat'
            component={Chat}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
