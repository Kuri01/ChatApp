import { View, Text } from 'react-native';
import { Header as HeaderRNE } from 'react-native-elements/dist/header/Header';
import { styles } from './ChatHeader.styles';
import { Avatar as AvatarForIcons } from 'react-native-elements/dist/avatar/Avatar';
import { TrimName } from '../../Functions/TrimName';
import { Phone, VideoCall } from '../../Components/RoomsUser/Svg/SvgComponents';
import { TouchableOpacity } from 'react-native';

export const ChatHeader = ({ navigation, userName }) => {
  return (
    <HeaderRNE
      containerStyle={styles.headerComponent}
      leftComponent={() => (
        <View style={styles.goBackAndAvatarContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.goBackButton}>{'<'}</Text>
          </TouchableOpacity>

          <AvatarForIcons
            size={40}
            rounded
            containerStyle={styles.icon}
            source={{
              uri: 'https://placeimg.com/140/140/any',
            }}
          />
          <View style={styles.headerTextContainer}>
            <Text style={styles.name}>
              <TrimName name={userName} trimAfter={14} />
            </Text>
            <Text style={styles.activityText}>activity</Text>
          </View>
        </View>
      )}
      rightComponent={() => (
        <View style={styles.icons}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Phone />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <VideoCall />
            </TouchableOpacity>
          </View>
        </View>
      )}
      leftContainerStyle={styles.leftContainer}
      rightContainerStyle={styles.rightContainer}
    />
  );
};
