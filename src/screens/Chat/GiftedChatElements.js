import { InputToolbar, Bubble, Send } from 'react-native-gifted-chat';
import { SendSign } from '../../Components/RoomsUser/Svg/SvgComponents';
import { styles } from './Chat.styles';
export function renderInputToolbar(props) {
  return (
    <InputToolbar
      {...props}
      containerStyle={styles.toolbar}
      textInputStyle={styles.textInput}
    />
  );
}

export function renderBubble(props) {
  return (
    <Bubble
      {...props}
      textStyle={{
        right: {
          fontFamily: 'Poppins_400Regular',
          color: 'white',
        },
        left: {
          fontFamily: 'Poppins_400Regular',
          color: 'black',
        },
      }}
      wrapperStyle={{
        right: {
          backgroundColor: '#5603AD',
        },
        left: {
          backgroundColor: '#FFFFFF',
          margin: 5,
        },
      }}
    />
  );
}
export function renderSend(props) {
  return <Send {...props} label={<SendSign />} containerStyle={styles.send} />;
}
