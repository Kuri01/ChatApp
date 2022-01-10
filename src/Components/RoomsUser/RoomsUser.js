import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { TrimName } from '../../Functions/TrimName';
import { styles } from './RoomsUser.styles';
import { useQuery } from '@apollo/client';
import { LOAD_MESSAGES } from '../../../GraphQL/Queries';
import { TouchableOpacity } from 'react-native';
const RoomsUser = ({ roomID, name, navigation, userID }) => {
  useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });
  const { error, loading, data } = useQuery(LOAD_MESSAGES, {
    variables: { id: roomID },
  });
  if (loading) return <Text>loading...</Text>;
  if (error) return <Text>Error {error.message}</Text>;
  const lastMessage = data.room.messages[0].body;
  console.log(data);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Chat', { roomID, userID, userName: name })
      }
    >
      <Avatar
        size={64}
        containerStyle={styles.icon}
        rounded
        source={{
          uri: 'https://placeimg.com/140/140/any',
        }}
      />
      <View style={styles.textBox}>
        <Text style={styles.header}>
          <TrimName name={name} trimAfter={18} />
        </Text>
        <Text style={styles.message} allowFontScaling={true}>
          <TrimName name={lastMessage} trimAfter={40} />
        </Text>
      </View>
      <Text style={styles.indicator}>Active?</Text>
    </TouchableOpacity>
  );
};

export default RoomsUser;
