import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { GiftedChat } from 'react-native-gifted-chat';
import { useMutation, useQuery } from '@apollo/client';
import { LOAD_MESSAGES } from '../../../GraphQL/Queries';
import { SEND_MESSAGE } from '../../../GraphQL/Mutations';
import {
  renderAvatar,
  renderBubble,
  renderInputToolbar,
  renderSend,
} from './GiftedChatElements';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_500Medium,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { ChatHeader } from './ChatHeader';
import { styles } from './Chat.styles';
const Chat = ({ route, navigation }) => {
  useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_400Regular,
  });
  const roomId = route.params.roomID;
  const userId = route.params.userID;
  const userName = route.params.userName;
  const { error, loading, data } = useQuery(LOAD_MESSAGES, {
    variables: { id: roomId },
    pollInterval: 1000,
  });

  const [messages, setMessages] = useState([]);
  const [sendMessage] = useMutation(SEND_MESSAGE);
  useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  useEffect(() => {
    if (data) {
      setMessages(
        data.room.messages.map((message) => {
          return {
            _id: message.id,
            text: message.body,
            createdAt: message.insertedAt,
            user: {
              _id: message.user.id,
              name: message.user.firstName,
              avatar: 'https://placeimg.com/140/140/any',
            },
          };
        })
      );
      console.log(data);
    }
  }, [data]);

  const onSend = useCallback((messages = {}) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    sendMessage({
      variables: {
        body: messages[0].text,
        roomId: roomId,
      },
    });
  }, []);
  if (error) return <Text>Error {error.message}</Text>;
  return (
    <View style={{ flex: 1, backgroundColor: '#F0F8FF' }}>
      <ChatHeader userName={userName} navigation={navigation} />
      <GiftedChat
        messages={messages}
        renderInputToolbar={renderInputToolbar}
        minInputToolbarHeight={100}
        renderBubble={renderBubble}
        alwaysShowSend={true}
        renderSend={renderSend}
        messagesContainerStyle={styles.messageContainer}
        onSend={(messages) => onSend(messages)}
        showAvatarForEveryMessage={true}
        renderLoading={() => {
          return <Text>Loading.....</Text>;
        }}
        user={{
          _id: userId,
        }}
      />
    </View>
  );
};

export default Chat;
