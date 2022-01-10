import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import {
  useFonts,
  Poppins_600SemiBold,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';
import { TrimName } from '../../Functions/TrimName';
import { styles } from './RoomsUser.styles';
const RoomsUser = ({ roomID, name, navigation, userID }) => {
  useFonts({
    Poppins_600SemiBold,
    Poppins_400Regular,
  });
  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() =>
        navigation.navigate('Chat', { roomID, userID, userName: name })
      }
    >
      <Avatar
        size={64}
        containerStyle={{ marginHorizontal: 3 }}
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
          sample message
        </Text>
      </View>
      <Text style={styles.indicator}>Active?</Text>
    </View>
  );
};

export default RoomsUser;
