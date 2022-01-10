import { View, Text } from 'react-native';
import { Header as HeaderRNE } from 'react-native-elements/dist/header/Header';
import { styles } from './ChatHeader.styles';
import { Avatar as AvatarForIcons } from 'react-native-elements/dist/avatar/Avatar';
import { TrimName } from '../../Functions/TrimName';
export const ChatHeader = ({ navigation, userName }) => (
  <HeaderRNE
    containerStyle={{
      borderBottomLeftRadius: 24,
      borderBottomRightRadius: 24,
      backgroundColor: '#B6DEFD',
    }}
    leftComponent={() => (
      <View style={styles.goBackAndAvatarContainer}>
        <Text onPress={() => navigation.goBack()} style={styles.goBackButton}>
          {'<'}
        </Text>
        <AvatarForIcons
          size={40}
          rounded
          containerStyle={{ marginHorizontal: 5 }}
          source={{
            uri: 'https://placeimg.com/140/140/any',
          }}
        />
        <View style={styles.headerTextContainer}>
          <Text h4 style={styles.name}>
            <TrimName name={userName} trimAfter={14} />
          </Text>
          <Text style={styles.activityText}>activity</Text>
        </View>
      </View>
    )}
    rightComponent={() => (
      <View style={styles.icons}>
        <AvatarForIcons
          size={40}
          rounded
          containerStyle={{ marginHorizontal: 5 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <AvatarForIcons
          size={40}
          rounded
          containerStyle={{ marginHorizontal: 5 }}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    )}
    leftContainerStyle={styles.leftContainer}
    rightContainerStyle={styles.rightContainer}
  />
);
