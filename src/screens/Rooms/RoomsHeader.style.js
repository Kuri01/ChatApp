import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#B6DEFD',
    borderBottomStartRadius: 24,
    borderBottomEndRadius: 24,
  },
  icon: { marginHorizontal: 5 },
  iconsContainer: { flexDirection: 'row', top: 10 },
  title: {
    color: '#5603AD',
    fontFamily: 'Poppins_700Bold',
    fontSize: 36,
  },
  leftContainer: {
    minWidth: 150,
    flex: 1,
    justifyContent: 'center',
  },
});
