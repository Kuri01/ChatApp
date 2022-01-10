import { Header as HeaderRNE, HeaderProps, Icon } from 'react-native-elements';
import { Text as ElementText } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { View } from 'react-native';
export const RoomsHeader = () => {
  return (
    <HeaderRNE
      leftComponent={() => (
        <ElementText
          h1
          style={{
            color: '#5603AD',
            fontFamily: 'Poppins_700Bold',
            fontSize: 36,
          }}
        >
          Rooms
        </ElementText>
      )}
      rightComponent={() => (
        <View style={{ flexDirection: 'row' }}>
          <Avatar
            size={54}
            rounded
            containerStyle={{ marginHorizontal: 5 }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />

          <Avatar
            size={54}
            rounded
            containerStyle={{ marginHorizontal: 5 }}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
      )}
      leftContainerStyle={{
        minWidth: 150,
        flex: 1,
        justifyContent: 'center',
      }}
      containerStyle={{
        backgroundColor: '#B6DEFD',
        borderBottomStartRadius: 24,
        borderBottomEndRadius: 24,
      }}
    />
  );
};
