import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { Text as ElementText } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { View } from 'react-native';
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Search, Rooms } from '../../Components/RoomsUser/Svg/SvgComponents';
import { TouchableOpacity } from 'react-native';
import { styles } from './RoomsHeader.style';
export const RoomsHeader = () => {
  return (
    <HeaderRNE
      leftComponent={() => (
        <ElementText h1 style={styles.title}>
          Rooms
        </ElementText>
      )}
      rightComponent={() => (
        <View style={styles.iconsContainer}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Search />
            </TouchableOpacity>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Rooms />
            </TouchableOpacity>
          </View>
        </View>
      )}
      leftContainerStyle={styles.leftContainer}
      containerStyle={styles.headerContainer}
    />
  );
};
